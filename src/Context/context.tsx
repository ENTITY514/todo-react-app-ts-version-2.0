import React, { useContext } from "react"

const StateContext = React.createContext("hello")

export const GetStateContext = () => {
    return useContext(StateContext)
}

export const StateContextProvider = ({children}) => {

    let state = {
        text:"Hello world"
    }

    return (
        <StateContext.Provider value={"Hello world"}>
            {children}
        </StateContext.Provider>
    )
}