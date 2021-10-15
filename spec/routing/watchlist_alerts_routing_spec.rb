require "rails_helper"

RSpec.describe WatchlistAlertsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/watchlist_alerts").to route_to("watchlist_alerts#index")
    end

    it "routes to #show" do
      expect(get: "/watchlist_alerts/1").to route_to("watchlist_alerts#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/watchlist_alerts").to route_to("watchlist_alerts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/watchlist_alerts/1").to route_to("watchlist_alerts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/watchlist_alerts/1").to route_to("watchlist_alerts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/watchlist_alerts/1").to route_to("watchlist_alerts#destroy", id: "1")
    end
  end
end
