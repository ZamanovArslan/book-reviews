module Api
  module V1
    class CommentsController < ApplicationController
      expose :comments, lambda {fetch_comments}
      expose :comment, decorate: lambda {|comment|
        authorize! comment
        CommentDecorator.new(comment)
      }

      def index
        render json: comments
      end

      def create
        comment.review = Review.find(params[:review_id])
        if comment.save
          render json: comment, serializer: CommentSerializer
        else
          render json: comment.errors, :status => :unprocessable_entity
        end
      end

      def destroy
        comment.destroy
        render json: {:status => 200}
      end

      private

      def comment_params
        params.require(:comment).permit(:text).merge(user_id: current_user.id)
      end

      def fetch_comments
        comments = Review.find(params[:review_id]).comments
        authorize! comments
        comments
      end
    end
  end
end