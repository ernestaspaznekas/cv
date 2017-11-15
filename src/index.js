import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/MuiDarkApp'
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

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