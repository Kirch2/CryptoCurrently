class CryptocurrenciesController < ApplicationController
  before_action :set_cryptocurrency, only: [:show, :update, :destroy]

  # GET /cryptocurrencies
  def index
    @cryptocurrencies = Cryptocurrency.all

    render json: @cryptocurrencies
  end

  # GET /cryptocurrencies/1
  def show
    render json: @cryptocurrency
  end

  # POST /cryptocurrencies
  def create
    @cryptocurrency = Cryptocurrency.new(cryptocurrency_params)

    if @cryptocurrency.save
      render json: @cryptocurrency, status: :created, location: @cryptocurrency
    else
      render json: @cryptocurrency.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cryptocurrencies/1
  def update
    if @cryptocurrency.update(cryptocurrency_params)
      render json: @cryptocurrency
    else
      render json: @cryptocurrency.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cryptocurrencies/1
  def destroy
    @cryptocurrency.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cryptocurrency
      @cryptocurrency = Cryptocurrency.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cryptocurrency_params
      params.require(:cryptocurrency).permit(:label, :description, :marketCap, :symbol, :logoUrl, :change_24h, :change_7d)
    end
end
