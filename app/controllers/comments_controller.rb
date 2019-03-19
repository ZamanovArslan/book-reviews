class CommentsController < ApplicationController
	expose :comments, -> { Review.find(params[:review_id]).comments.order(:created_at) }
  expose :comment

  def create
    comment.user = current_user
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
      params.require(:comment).permit(:text)
    end
end
