  
import React, { useState, useReducer } from 'react';
import { ReducerTodo, initialState } from '../reducers/ReducerTodo';


const Todo = () => {
    const [newTodoState, setNewTodoState] = useState();
    const [state, dispatch] = useReducer(ReducerTodo, initialState );
    const handleChanges = e => {
        setNewTodoState(e.target.value);
    };
    return(
        <div> 
             <div className= "Todo" >

          <input
            className="todo-input"
            type="text"
            name="newTodoState"
            value={newTodoState}
            onChange={handleChanges}
          />
        </div>
        <button
            onClick={() => {
              dispatch({ type: "UPDATE_TODO", payload: newTodoState });
            }}
          > Add Todo
          </button>
        </div>
    )
}
export default Todo;