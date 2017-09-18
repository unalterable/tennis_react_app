import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TennisGame from "./components/tennis_game_view"
import tennis_game_reducer from "./reducers/tennis_game"
import Layout from './components/layout';

const store = createStore(tennis_game_reducer)
const app = document.getElementById('app');

ReactDom.render(

  <Provider store={store}>
    <Layout />
    </Provider >

  , app);
