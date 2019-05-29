import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (document.getElementById('root')) {
	ReactDOM.render(<App />, document.getElementById('root'));
}
if (document.getElementById('posts')) {
	ReactDOM.render(<App />, document.getElementById('posts'));
}
