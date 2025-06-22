import { useState } from 'react'
import './style.css'
import './index.css'

interface Task {
  id: number
  text: string
}

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<Task[]>([])
  const [doneTasks, setDoneTasks] = useState<Task[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newTask: Task = { id: Date.now(), text: input.trim() }
      setTodos([...todos, newTask])
      setInput('')
    }
  }

  const completeTask = (task: Task) => {
    setTodos(todos.filter((t) => t.id !== task.id))
    setDoneTasks([...doneTasks, task])
  }

  const deleteTask = (task: Task) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id))
  }

  return (
    <div className="min-h-screen p-10 bg-white text-black">
      <div className="todo-container">
        <h1 className="todo-container__header">YONG TODO</h1>

        <form className="todo-container__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-container__input"
            placeholder="할 일 입력"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="todo-container__button">
            할 일 추가
          </button>
        </form>

        <div className="render-container">
          {/* 할 일 목록 */}
          <div className="render-container__section">
            <h2 className="render-container__title">할 일</h2>
            <ul className="render-container__list">
              {todos.map((task) => (
                <li key={task.id} className="render-container__item">
                  <span className="render-container__item-text">{task.text}</span>
                  <button
                    onClick={() => completeTask(task)}
                    className="render-container__item-button complete"
                  >
                    완료
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 완료된 목록 */}
          <div className="render-container__section">
            <h2 className="render-container__title">완료</h2>
            <ul className="render-container__list">
              {doneTasks.map((task) => (
                <li key={task.id} className="render-container__item">
                  <span className="render-container__item-text">{task.text}</span>
                  <button
                    onClick={() => deleteTask(task)}
                    className="render-container__item-button delete"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
