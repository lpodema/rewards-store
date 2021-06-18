import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import LocalStorage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    key: "root",
    storage: LocalStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
