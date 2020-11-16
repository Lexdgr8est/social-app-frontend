import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';
import Spinner from '../components/Spinner';

import { checkPassword, serverURL, postRequest } from '../helpers/Helper'


const SignUp = () => {
    const [signUp, setSignUp] = useState({})
    const [signUpError, setSignUpError] = useState([])
    const [show, setShow] = useState({ type: 'password', type1: 'password' })


    const googleUrl = "http://localhost:5000/auth/google";



    //Gets data from signUp page
    const handleSignUp = (e) => {
        let name = e.target.name
        let value = e.target.value
        setSignUp(prev => { return { ...prev, [name]: value } })
    }

    //Submits SignUp data to server
    const submitSignUp = async (e) => {
        e.preventDefault()
        //use function to check password
        let check = checkPassword(signUp.password, signUp.password1)
        if (!check[0]) {
            setSignUpError(check[1])
        } else {
            setSignUpError([])
            console.log(signUp);
            let data = await postRequest(`${serverURL}/auth/signup`, signUp)
            setSignUp({})
            console.log(data.data);
        }
    }


    //makes password visible
    const showPassword = (nos) => {
        if (nos === 0) {
            if (show.type === 'password') {
                setShow(prev => prev = { ...prev, type: 'text' })
            } else {
                setShow(prev => prev = { ...prev, type: 'password' })
            }
        }
        if (nos === 1) {
            if (show.type1 === 'password') {
                setShow(prev => prev = { ...prev, type1: 'text' })
            } else {
                setShow(prev => prev = { ...prev, type1: 'password' })
            }
        }
    }



    return (
        <main className="signup">
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
                <h2>SignUp</h2>
                {signUpError.length > 0 && <div className="signup-error"> <div>{signUpError}</div><span onClick={() => { setSignUpError([]); }}>X</span> </div>}
                <br />
                <form onSubmit={submitSignUp}>
                    <div className="control">
                        <input type="text" onChange={handleSignUp} name='firstname' placeholder="First Name" required />
                    </div>
                    <div className="control">
                        <input type="text" onChange={handleSignUp} name='lastname' placeholder="Last Name" required />
                    </div>
                    <div className="control">
                        <input type="text" name='username' onChange={handleSignUp} placeholder="Username" required />
                    </div>
                    <div className="control">
                        <input type="email" name='email' onChange={handleSignUp} placeholder="Email" required />
                    </div>
                    <div className="control">

                        <input type={show.type} name='password' onChange={handleSignUp} placeholder="Password" required />
                        <i className="fas fa-eye" onClick={() => { showPassword(0) }}></i>
                    </div>
                    <div className="control">

                        <input type={show.type1} name='password1' onChange={handleSignUp} placeholder="Confirm Password" required />
                        <i className="fas fa-eye" onClick={() => { showPassword(1) }}></i>
                    </div>
                    <div className="flex-spinner">
                        <Spinner />
                    </div>
                    <div className="control control-btn">
                        <button className="btn btn-primary" >Sign Up</button>
                    </div>
                    <div className="or">
                        <hr className="bar" />
                        <span>OR</span>
                        <hr className="bar" />
                    </div>
                    <div className="control">
                        <a className="btn" target="_blank" href={`${serverURL}/auth/google`} id="googleBtn" >Sign Up With Google</a>
                    </div>
                </form>

                <div className="other-info">
                    {/* <Link to='login'>Forgot Password</Link> | */} <Link to='/login'>Already have an account</Link>
                </div>
            </div>
        </main>
    )
}

export default SignUp
