  
import React, {useReducer} from 'react';
import {reducer, initialState} from './reducers/reducerTodo';

// Components
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} />
    </div>
  );
}

export default App;