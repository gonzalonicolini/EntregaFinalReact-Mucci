import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() //Creo el contexto
export const useDarkModeContext = () => useContext(DarkModeContext) //permite usar el contexto

export const DarkModeProvider = (props) => { //define el proveedor del contexto
    //el proveedor es el medio que define quien va a usar el contexto
    const[darkMode,setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode) {
            document.body.firstElementChild.classList.add('darkMode') //
        }
        document.body.firstElementChild.classList.remove('darkMode')
    }

    return(
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}