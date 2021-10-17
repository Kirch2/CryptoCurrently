class CryptoAlertMailer < ApplicationMailer
    def send_email(options={})
        @message = options[:message]
        mail(:to=>options[:email], :subject=>options[:subject])
    end
end
