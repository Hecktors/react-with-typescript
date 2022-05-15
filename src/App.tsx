import { useState } from 'react'
import NewTodo from './components/NewTodo/NewTodo'
import Todos from './components/Todos/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(todoText)))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  )
}

export default App
