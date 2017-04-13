class RegistrationsController < ApplicationController
  def create
  	account = Account.new(account_params)
  	if account.save
  		token = Auth.issue({account_id: account.id})
  		render json: {token: token}
  	else
  		render json: "Error creating account.", status: 401
  	end
  end

  private
  def account_params
  	params.require(:account).permit(:username, :password)
  end
end
