import React from 'react'
import { GetStateContext } from '../../Context/context'
import style from './page.module.css'

const Todos = () => {
    let state: string = GetStateContext()
    return (
        <div className={style.container}>
            {state}
        </div>
    )
}

export default Todos;