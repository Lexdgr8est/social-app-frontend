import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';
import axios from "axios";

const SignUp = () => {

    const googleUrl = "http://localhost:5000/auth/google";

    return (
        <main className="signup">
            <div className="left">
                <img src={pattern} alt="pattern"/>
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
                <form>
                    <div className="control">
                        <input type="text" placeholder="Full Name" required/>
                    </div>
                    <div className="control">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div className="control">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="control">
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="control">
                        <input type="password" placeholder="Confirm Password" required/>
                    </div>
                    <div className="control control-btn">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="or">
                        <hr className="bar"/>
                        <span>OR</span>
                        <hr className="bar"/>
                    </div>
                    <div className="control">
                        <a className="btn" target="_blank" href={googleUrl} id="googleBtn" >Sign Up With Google</a>
                    </div>
                </form>

                <div className="other-info">
                    <Link to='login'>Forgot Password</Link> | <Link to='/login'>Already have an account</Link>
                </div>
            </div>
        </main>
    )
}

export default SignUp
