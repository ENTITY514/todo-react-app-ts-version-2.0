import React from "react"
import { IStateProvider, ITodo, ITodoContext } from "../@types/todo"

const StateContext = React.createContext<ITodoContext|null>(null)

export const GetStateContext = () => {
    return React.useContext(StateContext)
}

export const StateProvider: React.FC <IStateProvider> = ({children}) => {
    let [input_title, setInputTitle] = React.useState<string>("Напишите задачу...")
    let [todos, setTodos] = React.useState<ITodo[]>([])

    let createTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.trunc(Math.random()*10000),
            title: title,
            removeTodo
        }
        setTodos([...todos,newTodo])

    }

    let removeTodo = (id: number) => {
        let newtodos = todos.filter(item => item.id!==id)
        setTodos(newtodos)
    }

    let inputChange = (title: string): void => {
        setInputTitle(title)
    }


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