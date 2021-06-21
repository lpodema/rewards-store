import {
    TOKEN,
    PRODUCTS_ENDPOINT,
    USER_ENDPOINT,
    ADD_POINTS_ENDPOINT,
    REDEEM_HISTORY_ENDPOINT,
    REDEEM_PRODUCT,
} from "../utils/constants";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
};

export const getProducts = async () => {
    const response = await fetch(PRODUCTS_ENDPOINT, { method: "get", headers });

    if (response.status === 200) {
        return response.json();
    } else {
        console.log("PRODUCTOS: error en el fetch");
    }
};

export const getUserInfo = async () => {
    const response = await fetch(USER_ENDPOINT, { method: "get", headers });

    if (response.status === 200) {
        const content = await response.json();
        const info = { name: content.name, points: content.points };
        return info;
    } else {
        console.log("USER_INFO: error en el fetch");
    }
};

export const addPoints = async (amount) => {
    const response = await fetch(ADD_POINTS_ENDPOINT, {
        method: "post",
        headers,
        body: JSON.stringify({ amount }),
    });

    if (response.status === 200) {
        const content = await response.json();
        return content["New Points"];
    } else {
        console.log("ADD_POINTS: error en el fetch");
    }
};

export const getHistory = async () => {
    const response = await fetch(REDEEM_HISTORY_ENDPOINT, {
        method: "get",
        headers,
    });

    if (response.status === 200) {
        const content = await response.json();
        const sorted = await content.sort((a, b) => {
            const aDate = new Date(a.createDate);
            const bDate = new Date(b.createDate);
            return bDate - aDate;
        });
        return sorted;
    } else {
        console.log("GET_HISTORY: error en el fetch");
    }
};

export const redeemProduct = async (productId) => {
    const response = await fetch(REDEEM_PRODUCT, {
        method: "post",
        headers,
        body: JSON.stringify({ productId }),
    });

    if (response.status === 200) {
        return true;
    } else {
        console.log("REDEEM_PRODUCT: error en el fetch");
        return false;
    }
};
