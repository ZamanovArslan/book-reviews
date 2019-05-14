class CommentsController < ApplicationController
  expose :comments, lambda {
    authorize! fetch_comments
    CommentDecorator.decorate_collection(fetch_comments)
  }
  expose :comment, decorate: lambda { |comment|
    authorize! comment
    CommentDecorator.new(comment)
  }

  def create
    comment.user_id = current_user.id
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
    Review.find(params[:review_id]).comments
  end
end
