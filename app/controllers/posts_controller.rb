class PostsController < ApplicationController

 	def index
    @posts = Post.all
  end

  def show
  	find_post
  end

  def new
    @post = Post.new
  end

  def edit
  	find_post
  end

  def create
    @post = Post.new(post_params)
    if @post.save 
      redirect_to post_path(@post.id)
    else
      render 'new'
    end
  end

  def update
  	find_post
    if @post.update(post_params)
      redirect_to post_path(@post.id)
    else
      render 'edit'
    end
  end

  def destroy
  	find_post
    @post.destroy
    redirect_to posts_path
  end

  private

  	def find_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:date, 
                                   :title, 
                                   :body)
    end


end
