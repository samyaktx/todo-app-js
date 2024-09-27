import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async (res) => {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  // TODO: 1. Fix infinite requests to get todos
  // TODO: 2. Implement update and delete todos
  // TODO: 3. Implement completed todos
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
