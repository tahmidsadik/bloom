const Elm = require('./Main.elm');
import '../../styl/signup.styl';

const container = document.getElementById('mount-point');
Elm.Signup.Main.embed(container);
