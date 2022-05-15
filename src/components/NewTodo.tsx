import { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (todo: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }
    return props.onAddTodo(enteredText)
  }

  // Using todo state and change handler
  // const handleChange = (event: React.FormEvent<HTMLInputElement>) => { ...}

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo