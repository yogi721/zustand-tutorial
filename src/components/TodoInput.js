import React, { useRef } from 'react'
import { useStore } from '../store'

function TodoInput() {
    const inputRef = useRef()
    const addtodo = useStore(state => state.addTodo)

    const addTodoHandler = () => {
        addtodo(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div>
            <h2>Add todo</h2>
            <input type="text" ref={inputRef} />
            <button onClick={addTodoHandler}>Add todo</button>
        </div>
    )
}

export default TodoInput
