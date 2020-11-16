import React from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';

const PasswordResetEmail = () => {
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
            <h2>Enter Your Email</h2>
            <form>
                <div className="control" style={spacing}>
                    <input type="email" name='email' placeholder="Reset Email" required />
                </div>
                <div className="control control-btn">
                    <button className="btn btn-primary">Reset Your Password</button>
                </div>
            </form>

            {/* <div className="other-info">
               <Link to='/signup'>Don't have an account</Link>
            </div> */}
        </div>
    </main>
    )
}

const spacing = {
    margin: '1rem 0rem 4rem 0rem'
}

export default PasswordResetEmail
