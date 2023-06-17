import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//импорт main scss стилей
import './Components/assets/scss/style.scss';

//импорт компонента App
import App from './App';

//импорт store
import store from './redux/store'

let root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = (state, getState, dispatch) => {
    root.render(
        <App
            state = {state}
            getState = {getState.bind(store)}
            dispatch = {dispatch.bind(store)}
            reRender = {reRender}
        />
    )
}

reRender(store.getState(), store.getState, store.dispatch)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();