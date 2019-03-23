class UsersController < ApplicationController
	expose: User.find_by(nickname: params[:nickname])
