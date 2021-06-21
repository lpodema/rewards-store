import React, { createContext, useReducer } from "react";
import Reducer from "./reducers";

const initialState = {
    user: null,
    authed: false,
    products: [],
    productsToShow: [],
    productsFiltered: [],
    filters: [],
    range: [],
    page: 1,
    history: [],
    loading: false,
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default Store;
