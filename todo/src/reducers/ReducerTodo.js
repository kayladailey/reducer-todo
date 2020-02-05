  
import React from 'react'

const reducer = (state, action) => {
    console.log("Inside reducer")
    switch(action.type) {
        case "ADD_TODO": {
            return [...state, action.payload]
        }

        default: return state;
    }
}

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987389
    }
];

export {reducer, initialState};