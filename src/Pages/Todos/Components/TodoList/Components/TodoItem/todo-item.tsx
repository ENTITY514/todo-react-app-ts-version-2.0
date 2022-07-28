import * as React from 'react'
import { ITodo } from '../../../../../../@types/todo'
import style from './todo-item.module.css'
import "./todo-item-style.css"


export const TodoItem:React.FC<ITodo> = ({title, id, removeTodo} :ITodo) => {
    return (
        <div className={"todo_container"}>
            <div className={style.title}>{title}</div>
            <div className={style.remove} onClick={()=>{removeTodo(id)}} style={{backgroundImage:"url(icons/check.png)"}}/>
        </div>
    )
}