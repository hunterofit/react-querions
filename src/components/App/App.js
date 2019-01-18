import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

// import { injectGlobal } from 'styled-components';
// import config from '../../config';
//
// const path1 = `${config.publicPath}/assets/fonts/futura/Futura Bold font.ttf`;
// const path2 = `${config.publicPath}/assets/fonts/futura/Futura Light font.ttf`;
//
// injectGlobal`
//   @font-face {
//     font-family: 'FuturaBold';
//     src: url(${path1});
//   }
//
//   @font-face {
//     font-family: 'FuturaLight';
//     src: url(${path2});
//   }
// `;

const App = (props) => (
  <div>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
