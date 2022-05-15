import { v4 as uuid } from 'uuid'

class Todo {
  id: string
  text: string

  constructor(todoText: string) {
    this.id = uuid()
    this.text = todoText
  }
}

export default Todo
