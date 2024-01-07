// Select Dom Elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

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

// Create Store
const store = Redux.createStore(counterReducer);

// Button Event Listeners
incrementEl.addEventListener('click' , () => {
    store.dispatch({
        type : 'increment'
    })
});

decrementEl.addEventListener('click' , () => {
    store.dispatch({
        type : 'decrement'
    })
})
