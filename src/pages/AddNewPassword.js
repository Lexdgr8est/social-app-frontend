import React from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';

const AddNewPassword = () => {
    return (
        <main className="login">
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
            <h2>Set New Password</h2>
            <form>
                <div className="control">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="control">
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
                <div className="control control-btn">
                    <button className="btn btn-primary">Set New Password</button>
                </div>
            </form>

            {/* <div className="other-info">
                <Link to='login'>Forgot Password</Link> | <Link to='/signup'>Don't have an account</Link>
            </div> */}
        </div>
    </main>
    )
}

export default AddNewPassword
