const initialState = {status: false}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGGED_TOGGLE':
            return {status: !state.status}
        default:
            return state
    }
}