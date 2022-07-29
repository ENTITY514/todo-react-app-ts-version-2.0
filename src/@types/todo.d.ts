import { ReactNode } from "react"

interface IStateProvider {
    children: ReactNode
}

export type ITodoContext = {
    todos: ITodo[],
    input_title: string,
    createTodo: (title:string) => void,
    removeTodo: (id: number) => void,
    inputChange: (title:string) => void,
}

export interface ITodo {
    id: number,
    title: string,
    removeTodo: (id: number) => void,
}

export interface ITodolist{
    items: ITodo[],
}