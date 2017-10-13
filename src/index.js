import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App.js').default
      ReactDOM.render(
        <NextApp />,
        rootEl
      )
    })
}