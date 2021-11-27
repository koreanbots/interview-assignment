
import './global/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
