import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  function toggle(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function remove(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <main className="app">
      <h1>Showman</h1>
      <p className="subtitle">A simple React project</p>

      <section className="card">
        <h2>Counter</h2>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>−</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </section>

      <section className="card">
        <h2>To-do list</h2>
        <form onSubmit={addTodo} className="todo-form">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a task..."
          />
          <button type="submit">Add</button>
        </form>
        <ul className="todos">
          {todos.length === 0 && <li className="empty">No tasks yet</li>}
          {todos.map(t => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                {t.text}
              </label>
              <button className="remove" onClick={() => remove(t.id)}>✕</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
