import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({
      // State: array of todos
      todos: [],

      // Action: Add a new todo
      addTodo: (text) => set((state) => ({
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: text,
            completed: false,
          }
        ]
      })),

      // Action: Toggle todo completion status
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),

      // Action: Remove a todo
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      })),

      // Action: Clear all completed todos
      clearCompleted: () => set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed)
      })),
    }),
    {
      name: 'todo-storage', // Key for localStorage
    }
  )
)

export default useTodoStore
