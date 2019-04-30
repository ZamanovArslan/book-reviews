class ReviewsDecorator < Draper::Decorator
  def filter(params = nil)
    unless params.nil?
      order_by = params[:order_by] || :created_at
      is_draft = params[:is_draft] || false
      created_at = params[:created_at]
      return object.reviews.where("is_draft = ? AND created_at = ?", is_draft, created_at).order(order_by)
    end
    object.reviews.order(:created_at)
  end
end
