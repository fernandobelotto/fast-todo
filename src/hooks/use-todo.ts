import { useState } from "react"
import { Todo } from "../types/Todo"

type UseTodoReturn = {
    todos: Todo[]
    addTodo: (todo: Todo) => void
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
    editTodo: (id: number, text: string) => void
}

export function useTodo(): UseTodoReturn {

    const [todos, setTodos] = useState<Todo[]>([])

    function addTodo(todo: Todo) {
        setTodos([...todos, todo])
    }

    function removeTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function toggleTodo(id: number) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done }
            }
            return todo
        }
        ))
    }


    function editTodo(id: number, text: string) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text }
            }
            return todo
        }
        ))
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }
}