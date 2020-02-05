import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/reducerTodo';

import Todo from './Todo.js';

const TodoList = ({state}) => {
    return(
        <div>
            <h1>To Do:</h1>
            {state.map((todo) => {
                return <Todo task={todo} />
            })}
        </div>
    )
}

export default TodoList;