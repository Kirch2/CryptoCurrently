class ApplicationMailer < ActionMailer::Base
  default from: 'cryptoalerts.notification@gmail.com'
  layout 'mailer'
end
