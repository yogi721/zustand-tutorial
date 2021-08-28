import create from "zustand";
import { devtools, persist } from "zustand/middleware"

let store = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),

    todos: [],
    addTodo: (todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),

    dark: false,
    toggleDarkMode: () => set((state) => ({ dark: !state.dark }))

})

store = devtools(store)
store = persist(store, { name: "store-settings" })

export const useStore = create(devtools(store))

