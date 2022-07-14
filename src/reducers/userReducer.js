const initialState = { user: '' };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true };
        case 'SET USER':
            return { ...state, user: action.payload };
        case 'SET ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
