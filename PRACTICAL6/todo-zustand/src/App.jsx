import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import useTodoStore from './store/todoStore'
import './index.css'

function App() {
  const todos = useTodoStore((state) => state.todos)

  return (
    <div className="app">
      <h1>Todo App with Zustand</h1>
      <div className="stats">
        Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
      </div>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
