class UsersController < ApplicationController
  expose :user, -> { UserDecorator.new(fetch_user) }

  def show
  end

  def fetch_user
    return current_user if params[:nickname].nil?

    User.find_by(nickname: params[:nickname])
  end
end
