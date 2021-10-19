class CryptoSyncTop
    @queue = :crypto

    def self.perform(*args)
        Cryptocurrency.sync_all_coinmarketcap
    end

end
