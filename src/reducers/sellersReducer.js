

export  default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SELLERS' :
            return action.payload
        default:
            return state;
    };
};