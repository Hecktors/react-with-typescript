import style from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => (
  <li className={style.item} onClick={props.onRemoveTodo}>
    {props.text}
  </li>
)

export default TodoItem
