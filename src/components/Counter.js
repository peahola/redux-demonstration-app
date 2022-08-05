import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => (
    <div>
        <div>Current Count: {props.countAsAProps}</div>
        <div>Are you logged in: {String(props.loggedInAsAProps)} </div>
        <button onClick={props.doIncrement}>Increment</button>
        <button onClick={() => props.doIncrementBy(3)}>Increment by 3</button>
        <button onClick={props.doDecrement}>Decrement</button>
        <button onClick={props.doToggleLogin}>Toggle login</button>
    </div>
)

function mapStateToProps(storeState) {
    return {
        countAsAProps: storeState.countSlice.count,
        loggedInAsAProps: storeState.loggedSlice.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doIncrement: function() {
            dispatch({
                type: 'INCREMENT'
            })
        },
        doDecrement: function() {
            dispatch({
                type: 'DECREMENT'
            })
        },
        doIncrementBy: function(amount) {
            dispatch({
                type: 'INCREMENT_BY',
                payload: amount
            })
        },
        doToggleLogin: function() {
            dispatch({
                type: 'LOGGED_TOGGLE'
            })
        }
    }
}

export const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)