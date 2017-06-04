defmodule Bloom.PageController do
  use Bloom.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
