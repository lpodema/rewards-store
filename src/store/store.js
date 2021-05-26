import React, { createContext, useReducer } from "react";
import Reducer from "./reducers";

const initialState = {
    user: null,
    products: [],
    productsToShow: [],
    productsFiltered: [],
    filters: [],
    range: [50, 2500],
    page: 1,
    history: [],
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
