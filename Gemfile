source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end
ruby '2.5.3'

# backend
gem 'decent_exposure', '3.0.0'
gem 'kaminari'
gem 'devise'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.2.1'
gem 'faker'
gem "action_policy"
gem 'draper'



# frontend
gem 'bootstrap', '~> 4.3.1'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

# views
gem 'simple_form'
gem 'slim'

group :development, :test do
  gem 'byebug', platforms: [:mri]
  gem 'capybara', '~> 2.13'
  gem 'rspec-rails', '~> 3.7'
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

