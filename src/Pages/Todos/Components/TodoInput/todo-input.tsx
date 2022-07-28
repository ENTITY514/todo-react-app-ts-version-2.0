import * as React from 'react'
import { GetStateContext } from '../../../../Context/context'
import style from './todo-input.module.css'

export const TodoInput:React.FC = () => {
    let {input_title, createTodo,  inputChange} = GetStateContext()

    function input_handler(e) {
        inputChange(e.target.value)
    }

    function button_click() {
        createTodo(input_title)
        inputChange("")
    }

    return (
        <div className={style.container}>
            <input  
            type="text" 
            className={style.input} 
            onChange={input_handler} 
            value={input_title}
            />
            <button className={style.button} onClick={button_click} style={{backgroundImage:"url(icons/plus.png)"}}>
            </button>
        </div>
    )
}