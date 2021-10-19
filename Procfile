web: bundle exec rails s
release: bin/rake db:migrate
schedule: rake resque:scheduler
worker: QUEUE=* rake environment resque:work