import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'

import tennis_game_reducer from "./reducers/tennis_game"
import TennisGameContainer from './components/tennis_game_container';

const store = createStore(
  tennis_game_reducer,
  applyMiddleware(thunkMiddleware)
)

ReactDom.render(
  <Provider store={store}>
    <TennisGameContainer />
  </Provider >
  , document.getElementById('app'));
