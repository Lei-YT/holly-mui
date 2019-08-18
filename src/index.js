import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme} from '@material-ui/core/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider } from '@material-ui/styles';

import CityView from './views/CityView';

const theme = createMuiTheme({
    root: {
        flexGrow: 1,
      },
    palette: {
        primary: {
            main: '#E83202', // dark #a22301 ; light #ec5b34
        },
        secondary: {
            main: '#007D9E', // dark #00576e ; light #3397b1
        },
    },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CityView />
    </ThemeProvider>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
