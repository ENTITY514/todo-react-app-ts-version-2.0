import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.module.css'
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import About from "./Pages/About/page";
import Targets from "./Pages/Targets/page";
import Todos from "./Pages/Todos/page";


const App = () => {
    return (
            <BrowserRouter>
                <div className={style.container}>
                    <Header />
                    <main className={style.main}>
                        <Routes>
                            <Route path="/" element={<Todos />}></Route>
                            <Route path="/Targets" element={<Targets />}></Route>
                            <Route path="/About" element={<About />}></Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
    );
}

export default App;