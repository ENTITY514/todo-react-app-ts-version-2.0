import * as React from 'react'
import { GetStateContext } from '../../Context/context';
import { TodoInput } from './Components/TodoInput/todo-input';
import { TodoList } from './Components/TodoList/todo-list';
import style from './page.module.css'


export const Todos: React.FC = () => {
    let {todos} = GetStateContext()
    return (
        <div className={style.container}>
            <TodoInput />
            <TodoList items={todos}/>
        </div>
    )
}