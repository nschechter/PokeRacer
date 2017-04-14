class V1::RacesController < ApplicationController
  def create
    account = Account.from_token(request.headers["bearer"])
    race = Race.new(race_params)
    race.is_active = true
    if race.save
      account.races << race
      render json: race
    else
      render json: "Unable to create race.", status: 401
    end
  end

  def destroy

  end

  def active
    active_races = Race.find_by(is_active: true)
    render json: active_races
  end

  private
  def race_params
    params.require(:race).permit(:creator_id, :title)
  end
end
