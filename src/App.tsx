import React from 'react'
import Todos from './components/Todos'

const todos = ['Learn Typescript', 'Learn Unit Tests']

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  )
}

export default App
