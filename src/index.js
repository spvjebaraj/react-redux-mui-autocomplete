import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";

import categoryReducer from "./store/reducers/categories";

const rootReducer = combineReducers({
  categories: categoryReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
