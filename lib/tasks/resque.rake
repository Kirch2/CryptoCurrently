require 'resque/tasks'
require 'resque/scheduler/tasks'

task "resque:setup" => :environment do

    Resque.schedule = YAML.load_file(
        "#{Rails.root}/config/resque_scheduler.yml"
    )
    ENV['QUEUES'] = 'default,sleep,wake_up,run,high'

end