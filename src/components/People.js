import React from 'react'
import { useStore } from '../store'
import PeopleInput from './PeopleInput'


function People() {
    const people = useStore(state => state.people)

    return (
        <div>
            <PeopleInput />
            <p> We have {people.length} people in our DB</p>
            <ul>
                {people.map(p => (
                    <li key={p}>{p}</li>
                ))}
            </ul>
        </div>
    )
}

export default People
