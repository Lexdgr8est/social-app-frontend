import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SignUp from './pages/SignUp'


export const DataContext = React.createContext()



const Context = ({ children }) => {
    // States
    const [profile, setProfile] = useState(null)
    const [auth, setAuth] = useState(false);
















    return (
        <>
            <DataContext.Provider value={{ auth, setAuth, profile, setProfile }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default Context
