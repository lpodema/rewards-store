export const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk";

const BASE_URL = "https://coding-challenge-api.aerolab.co";
export const PRODUCTS_ENDPOINT = `${BASE_URL}/products`;

export const USER_ENDPOINT = `${BASE_URL}/user/me`;

export const ADD_POINTS_ENDPOINT = `${BASE_URL}/user/points`;

export const REDEEM_HISTORY_ENDPOINT = `${BASE_URL}/user/history`;

export const REDEEM_PRODUCT = `${BASE_URL}/redeem`;

export const POINTS_BUTTONS = [
    { text: "1000", value: 1000 },
    { text: "5000", value: 5000 },
    { text: "7500", value: 7500 },
];

export const LOG_USER = "LOG_USER";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ERROR = "SET_ERROR";
export const UPDATE_POINTS = "UPDATE_POINTS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const PAGINATE_PRODUCTS = "PAGINATE_PRODUCTS";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const REDEEM_PROD = "REDEEM_PROD";
export const UPDATE_HISTORY = "UPDATE_HISTORY";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOADING = "LOADING";
