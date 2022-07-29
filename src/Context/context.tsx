import React from "react"
import { IStateProvider, ITodo, ITodoContext } from "../@types/todo"

const StateContext = React.createContext<ITodoContext | null>(null)

export const GetStateContext = () => {
    return React.useContext(StateContext)
}

export const StateProvider: React.FC<IStateProvider> = ({ children }) => {
    let [input_title, setInputTitle] = React.useState<string>("")
    let [todos, setTodos] = React.useState<ITodo[]>([])

    let createTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.trunc(Math.random() * 10000),
            title: title,
            removeTodo
        }
        localStorage.setItem(String(newTodo.id), newTodo.title)
        setTodos([...todos, newTodo])

    }

    let removeTodo = (id: number) => {
        let newtodos = todos.filter(item => item.id !== id)
        localStorage.removeItem(String(id))
        setTodos(newtodos)
    }

    let inputChange = (title: string): void => {
        setInputTitle(title)
    }

    React.useEffect(() => {
        let initial_state: ITodo[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
            initial_state.push({
                id: Number(id),
                title: String(localStorage.getItem(String(id))),
                removeTodo
            })
        }
        setTodos(initial_state)
    },[])


    return (
        <StateContext.Provider value={{
            todos,
            input_title,
            createTodo,
            removeTodo,
            inputChange,
        }}>
            {children}
        </StateContext.Provider>
    )
}