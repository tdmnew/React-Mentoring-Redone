import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import "./i18n";
import store from "./Store/index.js";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
