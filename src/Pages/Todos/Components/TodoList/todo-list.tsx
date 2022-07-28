import * as React from 'react'
import { ITodolist } from '../../../../@types/todo'
import { GetStateContext } from '../../../../Context/context'
import { TodoItem } from './Components/TodoItem/todo-item'
import style from './todo-list.module.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'



export let TodoList: React.FC<ITodolist> = ({ items }) => {
    let { removeTodo } = GetStateContext()
    return (

        <div className={style.container}>
            <TransitionGroup>
                {
                    items.map(item => {
                        return (
                            <CSSTransition
                                key={item.id}
                                timeout={580}
                                classNames={"todo_container"}
                            >
                                <TodoItem title={item.title} id={item.id} removeTodo={removeTodo} key={item.id} />
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
        </div>
    )
}