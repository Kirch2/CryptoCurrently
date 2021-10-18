class CryptocurrenciesController < ApplicationController
  before_action :set_cryptocurrency, only: [:show, :update, :destroy]

  # GET /cryptocurrencies
  def index
    @cryptocurrencies = Cryptocurrency.limit(200).order(:marketCap).reverse_order

    render json: @cryptocurrencies
  end

  # GET /cryptocurrencies/1
  def show
    render json: @cryptocurrency
  end

  # POST /cryptocurrencies
  def create
    CryptocurrencySyncJob.perform_now
    render json: { syncing: "true" }
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
