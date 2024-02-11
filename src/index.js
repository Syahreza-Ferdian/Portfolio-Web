import React from 'react';
import ReactDOM from 'react-dom';

// Components
import "./index.css";
import App from './App.js';
import EventHanding from './components/eventHandling';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
    <>
        <App></App>
        <EventHanding></EventHanding>
    </>,

    document.querySelector('#root')
);