import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import cartReducer from "./component/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';
import "./class.css" 


const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
