import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Store>
                <App />
            </Store>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
