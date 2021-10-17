class CryptocurrencySyncJob < ApplicationJob
  queue_as :default

  def after_perform
    puts "re-queue sync job"
    puts "re-queue sync job"
    puts "re-queue sync job"
    puts "re-queue sync job"
    puts "re-queue sync job"
    puts "re-queue sync job"
    # CryptocurrencySyncJob.set(wait: 2.minutes).perform_later
    # CryptocurrencySyncJob.set(wait: 30.seconds).perform_later
  end

  def perform(*args)
    # Cryptocurrency.sync_all_coinmarketcap
    puts "SYNC SHIT"
  end

end
