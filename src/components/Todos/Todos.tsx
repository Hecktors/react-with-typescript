import style from './Todos.module.css'
import Todo from '../../models/todo'
import TodoItem from '../TodoItem/TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={style.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  )
}

export default Todos
