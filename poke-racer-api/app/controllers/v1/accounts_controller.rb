class V1::AccountsController < ApplicationController
  def show
    account = Account.find(3)
    render json: account, serializer: AccountSerializer
  end

  def update
  end
end
