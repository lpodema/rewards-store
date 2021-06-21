import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Main from "./components/mainArea/main";
import ProfileArea from "./components/userArea/profileArea";
import LoggingIn from "./components/loggingin";

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
    const authed = localStorage.getItem("loggedIn") === "true";
    return (
        <Switch>
            <LoggedInRoute
                authed={authed}
                path='/profile'
                component={ProfileArea}
            />
            <Route path='/login'>
                <LoggingIn />
            </Route>
            {authed ? (
                <LoggedInRoute
                    authed={authed}
                    exact={true}
                    path='/'
                    component={Main}
                />
            ) : (
                <Route exact={true} path='/'>
                    <LoggingIn />
                </Route>
            )}
        </Switch>
    );
};

export default Routing;