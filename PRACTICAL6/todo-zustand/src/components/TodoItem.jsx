import useTodoStore from '../store/todoStore'

function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
