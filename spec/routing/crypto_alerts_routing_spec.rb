require "rails_helper"

RSpec.describe CryptoAlertsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/crypto_alerts").to route_to("crypto_alerts#index")
    end

    it "routes to #show" do
      expect(get: "/crypto_alerts/1").to route_to("crypto_alerts#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/crypto_alerts").to route_to("crypto_alerts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/crypto_alerts/1").to route_to("crypto_alerts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/crypto_alerts/1").to route_to("crypto_alerts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/crypto_alerts/1").to route_to("crypto_alerts#destroy", id: "1")
    end
  end
end
