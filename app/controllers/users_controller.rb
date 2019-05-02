class UsersController < ApplicationController
  expose :user, -> { UserDecorator.new(fetch_user) }

  def show
  end

  def fetch_user
    User.find_by(nickname: params[:nickname]) || current_user
  end
end
