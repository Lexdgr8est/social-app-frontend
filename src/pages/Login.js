import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';
import { serverURL, postRequest } from '../helpers/Helper'
import axios from 'axios';
import { DataContext } from '../Context'
const googleUrl = "http://localhost:5000/auth/google";

const Login = () => {
    const [logIn, setLogIn] = useState({})
    const [show, setShow] = useState({ type: 'password' })

    const { setAuth, setProfile } = useContext(DataContext)
    // ? handle Log In details
    const handleLogIn = (e) => {
        let name = e.target.name
        let value = e.target.value
        setLogIn(prev => { return { ...prev, [name]: value } })
    }
    const submitLogIn = async (e) => {
        e.preventDefault()
        let data = await postRequest(`${serverURL}/login`, logIn)
        console.log(data.data);
        setAuth(data.data.success)
        if (data.data.success) {
            setProfile(data.data.user)
        }
    }

    // make password visible
    const showPassword = (nos) => {
        if (nos === 0) {
            if (show.type === 'password') {
                setShow(prev => prev = { ...prev, type: 'text' })
            } else {
                setShow(prev => prev = { ...prev, type: 'password' })
            }
        }
    }

    return (
        <main className="login">
            <div className="left">
                <img src={pattern} alt="pattern" />
                <div className="left-content">
                    {/* <div className="title">SOCiaL</div> */}
                    <h2>Sign Up With Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla.
                </p>
                </div>
            </div>

            <div className="right">
                <h2>Login</h2>
                <form onSubmit={submitLogIn}>
                    {/* <div className="control">
                    <input type="text" placeholder="Username" required/>
                </div> */}
                    <div className="control">
                        <input type="email" name='email' onChange={handleLogIn} placeholder="Email" required />
                    </div>
                    <div className="control">
                        <input type={show.type} name='password' onChange={handleLogIn} placeholder="Password" required />
                        <i className="fas fa-eye" onClick={() => { showPassword(0) }}></i>
                    </div>
                    <div className="control control-btn">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="or">
                        <hr className="bar" />
                        <span>OR</span>
                        <hr className="bar" />
                    </div>
                    <div className="control">
                        <a className="btn" href={googleUrl}>Login With Google</a>
                    </div>
                </form>

                <div className="other-info">
                    <Link to='/reset-email'>Forgot Password</Link> | <Link to='/signup'>Don't have an account</Link>
                </div>
            </div>
        </main>
    )
}

export default Login
