class CommentsController < ApplicationController
  expose_decorated :comments, :fetch_comments
  expose_decorated :comment

  def create
    comment.user = current_user
    comment.review = Review.find(params[:review_id])
    comment.save
    redirect_to review_path(comment.review)
  end

  def destroy
    comment.destroy
    redirect_to review_path(comment.review)
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end

  def fetch_comments
    Review.find(params[:review_id]).comments.order(:created_at)
  end
end
