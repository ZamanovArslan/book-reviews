class ApplicationPolicy < ActionPolicy::Base
  def index?
    record.each do |rec|
      return false unless allowed_to?(:show?, rec)
    end
    true
  end

  def show?
    true
  end

  def new?
    true
  end

  def create?
    true
  end

  def update?
    user.admin? || (user.id == record.user_id)
  end

  def edit?
    user.admin? || (user.id == record.user_id)
  end

  def destroy?
    user.admin? || (user.id == record.user_id)
  end

  def modify?
    user.admin? || (user.id == record.user_id)
  end
end
