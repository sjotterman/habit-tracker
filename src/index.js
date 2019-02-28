import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Testing only
// TODO: Replace with mock api call
const initialState = {
    goals: [
        {
            id: 'brush-my-teeth',
            name: 'Brush my teeth',
            streak: 6,
            done: 'Not yet',
            last_done: '6 hours ago'
        },
        {
            id: 'sit-with-my-feelings',
            name: 'Sit with my feelings',
            streak: 0,
            done: 'Yes!',
            last_done: ''
        },
        {
            id: 'think-about-other-people',
            name: 'Think about other people',
            streak: 6,
            done: 'Yes!',
            last_done: '20 minutes ago'
        }
    ]
};

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
