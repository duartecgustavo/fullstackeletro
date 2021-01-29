const INITIAL_STATE = {
    value: 0,
}

export default function cart(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TO_CART':
            state.value = state.value + 1;
            return state;   
        case 'REMOVE_TO_CART':
            state.value = state.value - 1;
            return state;
        default:
            return state;
    }   
}