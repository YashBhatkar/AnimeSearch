/*global $*/
/*global $*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";

import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";
//Root sass file for webpack to compile
import "./sass/main";

//Initial Default Redux Settings
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
