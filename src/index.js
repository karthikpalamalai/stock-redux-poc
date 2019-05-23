import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

window.onresize = () => console.log(document.getElementById('roro'));

ReactDOM.render(<App />, document.getElementById('root'));

