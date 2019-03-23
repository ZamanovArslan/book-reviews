class CommentsController < ApplicationController
  expose :comments, -> { fetch_comments }
  expose :comment

  def create
    
    comment.review = Review.find(params[:review_id])
    if comment.save
      redirect_to review_path(comment.review)
    end
  end

  def destroy
    comment.destroy
    redirect_to review_path(comment.review)
  end
  
  private

  def comment_params
    params.require(:comment).permit(:text).merge(comment.user => current_user)
  end

  def fetch_comments
    Review.find(params[:review_id]).comments.order(:created_at)
  end
end
