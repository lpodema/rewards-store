import React, { createContext, useReducer } from "react";
import Reducer from "./reducers";

const stateShape = {
    user: {
        userInfo: null,
        userPoints: 0,
        history: null,
    },
    products: [],
};

export const Context = createContext(stateShape);

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, stateShape);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default Store;
