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
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_POINTS":
            return {
                ...state,
                user: action.payload,
            };
        case "ADD_POST":
            return {
                ...state,
                posts: state.posts.concat(action.payload),
            };
        case "REMOVE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;
