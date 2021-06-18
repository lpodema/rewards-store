import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./store/store";

ReactDOM.render(
        <Router>
            <Store>
                <App />
            </Store>
        </Router>,
    document.getElementById("root")
);
