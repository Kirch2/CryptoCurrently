class Sleeper
    @queue = :sleep

    def self.perform(*args)
        puts "sleep"
    end

end
