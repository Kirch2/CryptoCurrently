class CryptoAlert < ApplicationRecord
  include ActionView::Helpers::NumberHelper
  belongs_to :cryptocurrency
  belongs_to :user

  # check crypto.price against self.threshold_value + self.threshold_operator
  def should_send_email
    if (self.threshold_operator == ">") 
      return self.cryptocurrency.price > self.threshold_value
    else
      return self.cryptocurrency.price < self.threshold_value
    end
  end

  def send_notification
    puts "send notification for crypto alert"
    # Enable production access with SES:
    # https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html
    if (self.should_send_email)
      begin
        # TODO - update message or subject to include price
        CryptoAlertMailer.send_email(email: self.user.email, subject: "CryptoCurrently - " + self.cryptocurrency.label + ": " + number_to_currency(self.cryptocurrency.price), message: "Sent with CryptoCurrently.app").deliver
      rescue => e
        puts "Email Send Failed"
        puts e
      end
    end
  end

  # Invoke with:
  # CryptoAlert.send_all_notifications
  def self.send_all_notifications
    self.all.each do |alert|
      alert.send_notification
    end
  end

end
