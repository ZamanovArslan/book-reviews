module Draper
  def policy_for(record:, **opts)
    record = record.model while record.is_a?(Draper::Decorator)
    super(record: record, **opts)
  end
end

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  prepend Draper
  # def current_user
  # UserDecorator.decorate(super) unless super.nil?
  # end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname])
  end
end
