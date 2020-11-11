import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';
import { DataContext } from '../Context'



const SignUp = () => {

    const googleUrl = "http://localhost:5000/auth/google";
    const { handleSignUp, submitSignUp, signUpError, clearSignupError } = useContext(DataContext);


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
                {signUpError.length > 0 && <div className="signup-error"> <div>{signUpError}</div><span onClick={clearSignupError}>X</span> </div>}
                <br />
                <form onSubmit={submitSignUp}>
                    <div className="control">
                        <input type="text" onChange={handleSignUp} name='fullname' placeholder="Full Name" required />
                    </div>
                    <div className="control">
                        <input type="text" name='username' onChange={handleSignUp} placeholder="Username" required />
                    </div>
                    <div className="control">
                        <input type="email" name='email' onChange={handleSignUp} placeholder="Email" required />
                    </div>
                    <div className="control">
                        <input type="password" name='password' onChange={handleSignUp} placeholder="Password" required />
                    </div>
                    <div className="control">
                        <input type="password" name='password1' onChange={handleSignUp} placeholder="Confirm Password" required />
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
                        <a className="btn" target="_blank" href={googleUrl} id="googleBtn" >Sign Up With Google</a>
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
