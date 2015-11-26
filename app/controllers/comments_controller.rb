class CommentsController < ApplicationController
  def new
  	@comment = Comment.new
  end

  def show
  end

  def create
  	@comment = Comment.new(comment_params)
  	@comment.user_id = current_user.id
  	respond_to do |format|
      if @comment.save
        format.html { redirect_to root_path, notice: 'Comment was successfully added.' }
      else
        format.html { render :new }
      end
    end
  end

  def index
  end
  
  	private

  	def comment_params
      params.require(:comment).permit(:comment_text)
    end
end
