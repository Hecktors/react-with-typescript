import style from './Todos.module.css'
import TodoItem from '../TodoItem/TodoItem'
import { useContext } from 'react'
import { TodosContext } from '../../store/todos-context'

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={style.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)} // first arg is this
        />
      ))}
    </ul>
  )
}

export default Todos
