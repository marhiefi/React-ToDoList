import React, {useState} from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([{id:1, name:'review React', complete: false}])
  return (
    <>
    <ToDoList todos={todos} /> 
    <input type="text" />
    <button>Add ToDo</button>
    <button>Clear Completed ToDos</button>
    <div>0 left to do</div>
    </>
  ) 
}

export default App;
