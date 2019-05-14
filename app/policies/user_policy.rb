class UserPolicy < ApplicationPolicy
  def modify?
    user.admin? || (user.id == record.id)
  end
end
