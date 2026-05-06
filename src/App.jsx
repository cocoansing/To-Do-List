import { useState } from 'react'
import TodoItem from './component/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function addTodo() {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput('')
  }
  function toggleTodo(id) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div>
      <h1>My Todos</h1>

      <input value={input} onChange={e => setInput(e.target.value)} type="text" />

      <button onClick={addTodo}>Add</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}
          onToggle={toggleTodo} onDelete={deleteTodo} />
      ))}

    </div>
  )
}

export default App
