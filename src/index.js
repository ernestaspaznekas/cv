import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.css';
//const path = './containers/MuiDarkApp';
import App from './containers/MuiDarkApp';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(<App />, app);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./containers/MuiDarkApp', () => {
      const NextApp = require('./containers/MuiDarkApp').default
      ReactDOM.render(
        <NextApp />,
        app
      )
    })
}