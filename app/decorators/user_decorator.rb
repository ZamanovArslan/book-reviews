class UserDecorator < Draper::Decorator
	delegate :admin, :email, :nickname
end
