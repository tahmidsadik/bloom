// @flow

// import React from 'react';
// import ReactDOM from 'react-dom';
// import SignupForm from './SignupForm';
import Elm from '../elm/Signup/Main.elm';
// import { AppContainer } from 'react-hot-loader';

// unfortunate flow doesn't understand css modules
// $FlowIgnore
import '../styl/signup.styl';

const container = document.getElementById('container');
Elm.Signup.Main.embed(container);

// ReactDOM.render(<SignupForm />, container);

// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     container);
// };

// render(SignupForm);

// if (module.hot) {
//   module.hot.accept('./SignupForm', () => {
//     render(SignupForm);
//   });
// }
