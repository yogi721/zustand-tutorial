import React, { useRef } from 'react'
import { useStore } from '../store'

function PeopleInput() {
    const inputRef = useRef()
    const addperson = useStore(state => state.addPerson)

    const add = () => {
        addperson(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div>
            <h2>Add a person</h2>
            <input type="text" ref={inputRef} />
            <button onClick={add}>Add person</button>
        </div>
    )
}

export default PeopleInput
