// Initial State
const initialState = {
    value: 0,
}

// Reducer Function
const counterReducer = (state = initialState , action) => {

    if(action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        };
    } else if(action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        };
    } else {
        return state;
    }
}

