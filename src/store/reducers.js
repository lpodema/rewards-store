import {
    LOG_USER,
    SET_PRODUCTS,
    UPDATE_POINTS,
    CHANGE_PAGE,
    PAGINATE_PRODUCTS,
    APPLY_FILTERS,
    REDEEM_PROD,
    UPDATE_HISTORY,
    SET_ERROR,
} from "../utils/constants";

const Reducer = (state, action) => {
    switch (action.type) {
        case LOG_USER:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    points: action.payload.points,
                },
            };
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsFiltered: action.payload,
            };
        case UPDATE_POINTS:
            const name = state.user.name;
            return {
                ...state,
                user: { name, points: action.payload },
            };
        case SET_ERROR:
            console.log("ERROR: ", action.payload);
            return {
                ...state,
                error: action.payload,
            };
        case CHANGE_PAGE:
            const prevPage = parseInt(state.page);
            const addPage = parseInt(action.payload);
            if (prevPage + addPage <= 0) {
                return { ...state };
            } else {
                return {
                    ...state,
                    page: prevPage + addPage,
                };
            }

        case PAGINATE_PRODUCTS:
            let begin = 0;
            if (action.payload.length > 16) {
                begin = (action.page - 1) * 16;
            }
            const end = begin + 16;

            return {
                ...state,
                productsToShow: action.payload.slice(begin, end),
            };

        case APPLY_FILTERS:
            const [min, max] = action.minMax;
            let products = action.payload.filter(
                (product) => product.cost >= min && product.cost <= max
            );
            if (action.categories.length > 0) {
                const categories = action.categories;
                products = products.filter((product) =>
                    categories.includes(product.category)
                );
            }
            return {
                ...state,
                productsFiltered: products,
            };

        case REDEEM_PROD:
            return {
                ...state,
            };
        case UPDATE_HISTORY:
            return {
                ...state,
                history: action.payload,
            };

        default:
            return state;
    }
};

export default Reducer;
