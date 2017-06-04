use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
config :bloom, Bloom.Endpoint,
  secret_key_base: "2pYochREGG6RQ56TMhwsGdXO701XctVa2IUH9vkfhyLKtUVNvFMzQPFSx/B6opZ8"

# Configure your database
config :bloom, Bloom.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "bloom_prod",
  pool_size: 20
