import style from './Todos.module.css'
import Todo from '../../models/todo'
import TodoItem from '../TodoItem/TodoItem'

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => (
  <ul className={style.todos}>
    {props.items.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} // first arg is this
      />
    ))}
  </ul>
)

export default Todos
