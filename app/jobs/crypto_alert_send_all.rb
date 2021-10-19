class CryptoAlertSendAll
    @queue = :crypto

    def self.perform(*args)
        CryptoAlert.send_all_notifications
    end

end
