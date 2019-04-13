class UsersController < ApplicationController
  expose :user, -> { User.find_by(nickname: params[:nickname]) }
end
