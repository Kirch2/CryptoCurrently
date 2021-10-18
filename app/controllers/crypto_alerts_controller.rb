class CryptoAlertsController < ApplicationController
  before_action :set_crypto_alert, only: [:show, :update, :destroy]

  # GET /crypto_alerts
  def index
    @crypto_alerts = CryptoAlert.all

    render json: @crypto_alerts
  end

  # GET /crypto_alerts/1
  def show
    render json: @crypto_alert
  end

  # POST /crypto_alerts
  def create
    @crypto_alert = CryptoAlert.new(crypto_alert_params)
  
    if @crypto_alert.save
      render json: @crypto_alert, status: :created, location: @crypto_alert
    else
      render json: @crypto_alert.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crypto_alerts/1
  def update
    if @crypto_alert.update(crypto_alert_params)
      render json: @crypto_alert
    else
      render json: @crypto_alert.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crypto_alerts/1
  def destroy
    @crypto_alert.destroy
    render json: @crypto_alert
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crypto_alert
      @crypto_alert = CryptoAlert.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def crypto_alert_params
      params.require(:crypto_alert).permit(:threshold_operator, :threshold_value, :delivery_method, :cryptocurrency_id, :user_id)
    end
end
