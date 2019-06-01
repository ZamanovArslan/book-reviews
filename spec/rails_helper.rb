ENV["RAILS_ENV"] ||= "test"

require "spec_helper"
require File.expand_path("../../config/environment", __FILE__)
require "rspec/rails"
require 'support/factory_bot'

Dir[Rails.root.join("spec", "support", "**", "*.rb")].each { |f| require f }

RSpec.configure do |config|
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!

  config.include Rails.application.routes.url_helpers

  config.include Capybara::DSL
end