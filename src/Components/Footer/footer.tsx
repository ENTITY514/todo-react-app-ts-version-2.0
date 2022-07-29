import * as React from "react";
import style from './footer.module.css'


export const Footer = () => {
    return (
        <div className={style.container}>
            <a className={style.link} target="_blank"href="https://github.com/ENTITY514/todo-react-app-ts-version-2.0"><div className={style.text}>Github</div></a>
        </div>
    );
}