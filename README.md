# Bloom
### Fake social networking site for fun and profit.

### Getting Started

#### Building the clientside code
- clone the repo `git clone https://github.com/tahmidsadik112/bloom-client.git`.
- `yarn install` or `npm install` whichever you prefer to install client_dependencies.
- The project uses elm. It needs `elm-package` in path. If you already have it 
  in path then just `elm-package install`. Otherwise you can install elm related
  stuff via yarn or npm `yarn global add elm` or `npm i -g elm`. It will put all  the necessary elm binaries in PATH.
- Add an entry in /etc/hosts `127.0.0.1 fireside.local`. We do this to get a clean   
  domain while developing.
- Run the project with `yarn run build` or `npm run build`.
- Steer your browser to `fireside.local:8080` for fun and profit.

To start your Phoenix app:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Start Phoenix endpoint with `mix phoenix.server`
  * The app assumes a mysql database 'bloom_db' in localhost with username 'bloomdev' and password 'bloom' for running in dev mode. Check out `config/dev.exs` for details.

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
