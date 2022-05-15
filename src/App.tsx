import React from 'react'
import Todos from './components/Todos'
import Todo from './models/todo'

const todos = [new Todo('Learn Typescript'), new Todo('Learn Unit Tests')]

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  )
}

export default App
