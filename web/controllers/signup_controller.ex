defmodule Bloom.SignupController do
  use Bloom.Web, :controller

  def signup(conn, _params) do
    render conn, "signup.html"
  end
end
