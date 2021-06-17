import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./main";
import ProfileArea from "../userArea/profileArea";

const Routing = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route path='/profile'>
                <ProfileArea />
            </Route>
        </Switch>
    );
};

export default Routing;
