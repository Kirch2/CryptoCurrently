class WatchlistEntriesController < ApplicationController
  before_action :set_watchlist_entry, only: [:show, :update, :destroy]

  # GET /watchlist_entries
  def index
    @watchlist_entries = WatchlistEntry.all

    render json: @watchlist_entries
  end

  # GET /watchlist_entries/1
  def show
    render json: @watchlist_entry
  end

  # POST /watchlist_entries
  def create
    @watchlist_entry = WatchlistEntry.new(watchlist_entry_params)

    if @watchlist_entry.save
      render json: @watchlist_entry, status: :created, location: @watchlist_entry
    else
      render json: @watchlist_entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /watchlist_entries/1
  def update
    if @watchlist_entry.update(watchlist_entry_params)
      render json: @watchlist_entry
    else
      render json: @watchlist_entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /watchlist_entries/1
  def destroy
    @watchlist_entry.destroy
    render json: @watchlist_entry
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_watchlist_entry
      @watchlist_entry = WatchlistEntry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def watchlist_entry_params
      params.require(:watchlist_entry).permit(:watchlist_id, :cryptocurrency_id)
    end
end
