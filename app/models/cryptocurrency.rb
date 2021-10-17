require 'net/http'
require 'json'
require "httparty"
class Cryptocurrency < ApplicationRecord
    validates :label, :symbol, uniqueness: true
    # validates :label, :symbol, :description, :marketCap, :logoUrl, :change_24h, :change_7d, presence: true
    def self.sync_all
        puts "sync all"
        

        puts "fetching"
        url = 'https://api.coincap.io/v2/assets?limit=500'
        uri = URI(url)
        response = Net::HTTP.get(uri)
        puts "got response"
        resp = JSON.parse(response)
        puts "parsed response"

        cryptos = resp["data"]
        cryptos.each do |crypto|
        # puts crypto["id"] # "bancor",
        # puts crypto["rank"] # "99",
        # puts crypto["symbol"] # "BNT",
        # puts crypto["name"] # "Bancor",
        # puts crypto["supply"] # "228559973.6401484300000000",
        # puts crypto["maxSupply"] # nil,
        # puts crypto["marketCapUsd"] # "926284192.3181229852748621",
        # puts crypto["volumeUsd24Hr"] # "10519801.5001535906842549",
        # puts crypto["priceUsd"] # "4.0526964435885531",
        # puts crypto["changePercent24Hr"] # "-1.5603407705272982",
        # puts crypto["vwap24Hr"] # "4.1119252332793789",
        # puts crypto["explorer"] # "https://etherscan.io/token/Bancor"

        # Find the DB record you want to update, if it exists
        cryptocurrency = Cryptocurrency.find_or_initialize_by(label: crypto["name"])
        cryptocurrency.symbol = crypto["symbol"]
        cryptocurrency.price = crypto["priceUsd"].to_f # to_f = "to float"
        cryptocurrency.logoUrl = "https://github.com/spothq/cryptocurrency-icons/raw/master/32/color/" + crypto["id"] + ".png"
        cryptocurrency.description = crypto["rank"]
        cryptocurrency.marketCap = crypto["marketCapUsd"].to_i
        cryptocurrency.change_24h = crypto["changePercent24Hr"].to_f
        cryptocurrency.change_7d = crypto["changePercent24Hr"].to_f
        cryptocurrency.save
        puts "saved crypto"
        end

    end

    def self.sync_all_coinmarketcap
        puts "sync all - coin market cap"
        
        puts "fetching w/ httparty"
        response = HTTParty.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5&convert=USD' , :headers => { 'X-CMC_PRO_API_KEY' => ENV['CMC_PRO_API_KEY'] } )
        resp = JSON.parse(response.body)
        puts "got response from coin market cap"

        cryptos = resp["data"]
        cryptos.each do |crypto|
            cryptocurrency = Cryptocurrency.find_or_initialize_by(label: crypto["name"])
            cryptocurrency.symbol = crypto["symbol"]
            cryptocurrency.price = crypto["quote"]["USD"]["price"].to_f # to_f = "to float"
            cryptocurrency.logoUrl = "https://github.com/spothq/cryptocurrency-icons/raw/master/32/color/btc.png"
            cryptocurrency.description = crypto["last_updated"]
            cryptocurrency.marketCap = crypto["quote"]["USD"]["market_cap"].to_i
            cryptocurrency.change_24h = crypto["quote"]["USD"]["percent_change_24h"].to_f
            cryptocurrency.change_7d = crypto["quote"]["USD"]["percent_change_7d"].to_f
            cryptocurrency.save
            puts "saved crypto"
        end
    end
end
