import React from 'react';
import { render } from 'react-dom';

import './css/index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const Root = () => {
	return (
		<App />
	)
}

render(<Root />, document.querySelector('#root'));


registerServiceWorker();
