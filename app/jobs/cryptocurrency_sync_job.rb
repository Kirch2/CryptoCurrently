class CryptocurrencySyncJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Cryptocurrency.sync_all_coinmarketcap
    sleep 30
    puts "re-queue sync job"
    CryptocurrencySyncJob.perform_now
  end

end
