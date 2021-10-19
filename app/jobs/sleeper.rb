class Sleeper
    @queue = :sleep

    def self.perform(*args)
        Cryptocurrency.sync_all_coinmarketcap
    end

end
