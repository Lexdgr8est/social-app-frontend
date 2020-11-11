import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SignUp from './pages/SignUp'

export const DataContext = React.createContext()



const Context = ({ children }) => {
    // States
    const [signUp, setSignUp] = useState({})
    const [signUpError, setSignUpError] = useState([])
    const [logIn, setLogIn] = useState({})
    const [auth, setAuth] = useState(false);



    //Gets data from signUp page
    const handleSignUp = (e) => {

        let name = e.target.name
        let value = e.target.value
        setSignUp(prev => { return { ...prev, [name]: value } })
    }
    //Submits SignUp data to server
    const submitSignUp = (e) => {
        e.preventDefault()
        console.log(signUp);
        if (signUp.password !== signUp.password1) {
            console.log('not match');
            setSignUpError('Password does not match')
        } else if (signUp.password.length < 8) {
            setSignUpError("Password needs a minimum of eight characters")
        } else if (signUp.password.search(/[a-z]/) < 0 || signUp.password.search(/[A-Z]/) < 0 || signUp.password.search(/[0-9]/) < 0) {
            setSignUpError("Password must have a lower case letter, upper case letter and  a digit")
        } else {
            console.log('successful');
            // axios.post('', signUp)
        }
    }

    // Clear the signup error
    const clearSignupError = (e) => {
        setSignUpError([]);
    }







    return (
        <>
            <DataContext.Provider value={{ handleSignUp, submitSignUp, signUpError, clearSignupError, auth }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default Context
