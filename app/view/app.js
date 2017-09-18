import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'

import TennisGame from "./components/tennis_game_view"
import tennis_game_reducer from "./reducers/tennis_game"
import Layout from './components/layout';

const store = createStore(
  tennis_game_reducer,
  applyMiddleware(thunkMiddleware)
)

ReactDom.render(
  <Provider store={store}>
    <Layout />
    </Provider >
  , document.getElementById('app'));
