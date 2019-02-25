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
                created: "2019-02-25",
                name: 'Brush my teeth'
            },
            {
                id: 'take-a-nap',
                created: "2019-02-25",
                name: 'Take a nap'
            }
        ]
}
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
