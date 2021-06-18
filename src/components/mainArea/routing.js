import React, { useContext, useEffect, useRef, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Main from "./main";
import ProfileArea from "../userArea/profileArea";
import LoggingIn from "../loggingin";
import { Context } from "../../store/store";

const LoggedInRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
const Routing = () => {
    const authed = localStorage.getItem("loggedIn") === "true"
    return (
        <Switch>
            <LoggedInRoute
                authed={authed}
                path='/rewards-store'
                component={Main}
            />
            <LoggedInRoute
                authed={authed}
                path='/profile'
                component={ProfileArea}
            />
            <Route path='/login'>
                <LoggingIn />
            </Route>
            <Route exact={true} path='/'>
                <LoggingIn />
            </Route>
        </Switch>
    );
};

export default Routing;
