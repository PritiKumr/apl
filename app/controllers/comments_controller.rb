class CommentsController < ApplicationController

  before_action :check_signin, only: [:index, :new, :show, :create]

  def new
  	@comment = Comment.new
  end

  def show
  end

  def create
  	@comment = Comment.new
    @comment.text = params[:path]
  	@comment.user_id = current_user.id
  	@comment.save
  end

  def index
  end
  
  	private

  	def comment_params
      params.require(:comment).permit(:comment_text)
    end

    def check_signin
      if !user_signed_in?
        @message = "Please login before continuing."
        respond_to do |format|
          format.html { redirect_to new_user_session_path, :notice => @message }
        end
      end
    end

end
