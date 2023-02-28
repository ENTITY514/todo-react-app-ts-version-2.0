import * as React from 'react'
import style from './page.module.css'

export const About = () => {
    return (
        <div className={style.container}>
            <p>Это мой первый проект на typescript, который является несколько экспериментальным. Стандартное приложение - список дел. </p>
            <p>Дела можно добавлять при помощи клавиши enter или нажав на плюсик рядом со строкой вода. Для удаления необходимо нажать на галочку рядом с задачей.</p>
            <p>Из библиотек я использовал react-router-dom и react-transition-group. Все задачи храятся в local storage. Хостинг приложения на vercell.</p> 
            <p>Внизу есть ссылка на github проекта.</p>
            <p>Недавнее: Я обновил немного ui приложения и добавил адаптивность.</p>
        </div>
    )
}