const initialState = {count: 0}

export const incrementReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'INCREMENT_BY':
            return {count: state.count + action.payload}
        default:
            return state
    }
}