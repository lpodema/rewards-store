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
    const [state, dispatch] = useContext(Context);
    console.log(state.loggedIn);
    // let loggedIn = useRef(state.loggedIn);

    // console.log(loggedIn);

    // useEffect(() => {
    //     loggedIn.current = state.loggedIn;
    // }, [state.loggedIn]);
    // const [authed, setAuthed] = useState(true);
    // useEffect(() => {
    //     const user = localStorage.getItem("user");
    //     if (user) {
    //         setAuthed(true);
    //     } else {
    //         setAuthed(false);
    //     }
    //     console.log(authed);
    // }, [state]);
    // // const { loggedIn } = state;
    // // console.log(loggedIn);
    // console.log(authed);

    return (
        <Switch>
            <LoggedInRoute
                authed={state.loggedIn}
                path='/rewards-store'
                component={Main}
            />
            <LoggedInRoute
                authed={state.loggedIn}
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
