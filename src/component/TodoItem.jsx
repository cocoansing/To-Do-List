function TodoItem({ todo, onToggle, onDelete}) {
  return (
    <div style={{ textDecoration: todo.done ? 'line-through' : 'none'}}>

     <input 
      type="checkbox"
      checked={todo.done}
      onChange={() => onToggle(todo.id)} />

      <span>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)}>X</button>

    </div>
  )
}

export default TodoItem