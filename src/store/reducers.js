const Reducer = (state, action) => {
    switch (action.type) {
        case "LOG_USER":
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    points: action.payload.points,
                },
            };
        case "SET_ARTICLES":
            // console.log("SET ARTICLES");
            return {
                ...state,
                products: action.payload,
                productsFiltered: action.payload,
            };
        case "ADD_POINTS":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "CHANGE_PAGE":
            console.log("CHANGE PAGE");
            const prevPage = parseInt(state.page);
            const addPage = parseInt(action.payload);
            if (
                prevPage + addPage <= 0 ||
                (prevPage + addPage) * 16 > state.productsFiltered.length
            ) {
                return { ...state };
            } else {
                return {
                    ...state,
                    page: prevPage + addPage,
                };
            }

        case "PAGINATE_PRODUCTS":
            // console.log("paginando cosas");
            const begin = (state.page - 1) * 16;
            const end = begin + 16;
            console.log(action.payload);
            return {
                ...state,
                productsToShow: action.payload.slice(begin, end),
            };

        case "APPLY_FILTER_COST":
            console.log("filtro de rango de precio", action.minMax);
            const [min, max] = action.minMax;
            const prods = action.payload;
            const newProds = prods.filter(
                (product) => product.cost >= min && product.cost <= max
            );
            // console.log(newProds);
            return {
                ...state,
                range: [min, max],
                productsFiltered: newProds,
            };

        // case "APPLY_ALL_FILTERS":
        //     const newProds = state.products.filter()

        // case "CHANGE_ARTICLES_TO_SHOW":
        //     const products = state.products
        //     if(state.filters.length === 0){
        //         return {
        //             ...state,
        //             productsToShow: products
        //         }
        //     }else{
        //         let productsToShow;
        //         if(state.filters.find((filter)=> )
        //         state.products.find(product => product.category=)

        //         const filterName = state.filters.keys()
        //         const filterToApply = state.filters.values()
        //         state.products.forEach(product => {
        //             filterName
        //             products.filter(product => product[filter.key])
        //         });
        //     }
        //  .filter( (product) => product[action.payload[0]]);
        //     return {
        //         ...state,
        //         productsToShow: state.action.payload,
        //     };
        default:
            return state;
    }
};

export default Reducer;
