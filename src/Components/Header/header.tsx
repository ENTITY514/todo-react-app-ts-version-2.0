import * as React from "react";
import style from './header.module.css'
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <div className={style.container}>
            <h3 className={style.name}>TODO App</h3>
            <div className={style.nav}>
                    <Link className={style.link} to={"/"}>Задачи</Link>
                    <Link className={style.link} to={"/About"}>Справка</Link>
                </div>
        </div>
    );
}