import React from 'react'
import { useStore } from '../store'
import TodoInput from './TodoInput'

function Todo() {
    const todos = useStore(state => state.todos)

    return (
        <div>
            <TodoInput />
            <p> You have {todos.length} things to do</p>
            <ul>
                {todos.map(p => (
                    <li key={p}>{p}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
