import { useContext, useRef } from 'react'
import { TodosContext } from '../../store/todos-context'
import style from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    // ! Tells ts the possible nullish value will neve be null when call onSubmit Handler
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }
    return todosCtx.addTodo(enteredText)
  }

  // Using todo state and change handler
  // const handleChange = (event: React.FormEvent<HTMLInputElement>) => { ...}

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
