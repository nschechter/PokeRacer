class V1::RacesController < ApplicationController
  def create
    account = Account.from_token(request.headers["bearer"])
    race = Race.new(race_params)
    race.creator_id = account.id
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

  def gen_race
    race = Race.find(params[:id])
    render json: {results: race.gen_race}
  end

  def active
    active_races = Race.where(is_active: true)
    render json: active_races
  end

  def show
    race = Race.find(params[:id])
    render json: race.accounts
  end

  private
  def race_params
    params.require(:race).permit(:title)
  end
end
