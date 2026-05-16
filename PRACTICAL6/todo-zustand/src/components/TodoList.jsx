import TodoItem from './TodoItem'
import useTodoStore from '../store/todoStore'

function TodoList() {
  const todos = useTodoStore((state) => state.todos)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)

  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        <>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="clear-button"
            >
              Clear Completed ({completedCount})
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default TodoList
