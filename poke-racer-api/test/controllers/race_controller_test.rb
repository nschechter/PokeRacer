require 'test_helper'

class RaceControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get race_create_url
    assert_response :success
  end

  test "should get destroy" do
    get race_destroy_url
    assert_response :success
  end

end
