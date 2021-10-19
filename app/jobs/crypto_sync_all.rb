class CryptoSyncAll
    @queue = :crypto

    def self.perform(*args)
        Cryptocurrency.sync_all
    end

end
