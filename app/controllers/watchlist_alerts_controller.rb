class WatchlistAlertsController < ApplicationController
  before_action :set_watchlist_alert, only: [:show, :update, :destroy]

  # GET /watchlist_alerts
  def index
    @watchlist_alerts = WatchlistAlert.all

    render json: @watchlist_alerts
  end

  # GET /watchlist_alerts/1
  def show
    render json: @watchlist_alert
  end

  # POST /watchlist_alerts
  def create
    @watchlist_alert = WatchlistAlert.new(watchlist_alert_params)

    if @watchlist_alert.save
      render json: @watchlist_alert, status: :created, location: @watchlist_alert
    else
      render json: @watchlist_alert.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /watchlist_alerts/1
  def update
    if @watchlist_alert.update(watchlist_alert_params)
      render json: @watchlist_alert
    else
      render json: @watchlist_alert.errors, status: :unprocessable_entity
    end
  end

  # DELETE /watchlist_alerts/1
  def destroy
    @watchlist_alert.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_watchlist_alert
      @watchlist_alert = WatchlistAlert.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def watchlist_alert_params
      params.require(:watchlist_alert).permit(:frequency, :delivery_method, :watchlist_id, :user_id)
    end
end
