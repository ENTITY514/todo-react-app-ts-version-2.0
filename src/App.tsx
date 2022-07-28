import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.module.css'
import {Footer} from "./Components/Footer/footer";
import {Header} from "./Components/Header/header";
import { StateProvider } from "./Context/context";
import {About} from "./Pages/About/page";
import {Todos} from "./Pages/Todos/page";


const App = () => {
    return (
        <StateProvider>
            <BrowserRouter>
                <div className={style.container}>
                    <Header />
                    <main className={style.main}>
                        <Routes>
                            <Route path="/" element={<Todos />}></Route>
                            <Route path="/About" element={<About />}></Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </StateProvider>
    );
}

export default App;