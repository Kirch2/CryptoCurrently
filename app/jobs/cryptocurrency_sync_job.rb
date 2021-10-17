class CryptocurrencySyncJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Cryptocurrency.sync_all
  end
  private
    def after_perform
      CryptocurrencySyncJob.set(wait: 10.minutes).perform_later
    end
end
