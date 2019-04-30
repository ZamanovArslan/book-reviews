class UsersController < ApplicationController
  expose :user, -> { UserDecorator.decorate(fetch_user) }

  def fetch_user
    unless params[:id].nil?
      return User.find(params[:id])
    end
    current_user
  end
end
