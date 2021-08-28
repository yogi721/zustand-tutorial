import create from "zustand";
import { devtools } from "zustand/middleware"

const store = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),

    todos: [],
    addTodo: (todo) =>
        set((state) => ({ todos: [...state.todos, todo] }))

})

export const useStore = create(devtools(store))

