import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SignUp from './pages/SignUp'

export const DataContext = React.createContext()



const Context = ({ children }) => {
    // States

    const [logIn, setLogIn] = useState({})
    const [auth, setAuth] = useState(false);










    return (
        <>
            <DataContext.Provider value={{ auth }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default Context
