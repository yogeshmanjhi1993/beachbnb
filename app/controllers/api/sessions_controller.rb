class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["invalid email or password"], status: 401
    end
  end

  def omni_create
    @user = User.from_omniauth(env["omniauth.auth"])
    login!(@user)
    redirect_to root_path
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["not signed in"], status: 404;
    end
  end
end
