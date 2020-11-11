import React from 'react';
import { Link } from 'react-router-dom';
import pattern from '../svgs/pattern.svg';

const Login = () => {
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
                <form>
                    {/* <div className="control">
                    <input type="text" placeholder="Username" required/>
                </div> */}
                    <div className="control">
                        <input type="email" name='email' placeholder="Email" required />
                    </div>
                    <div className="control">
                        <input type="password" name='password' placeholder="Password" required />
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
                        <a className="btn" href="https">Login With Google</a>
                    </div>
                </form>

                <div className="other-info">
                    <Link to='login'>Forgot Password</Link> | <Link to='/signup'>Don't have an account</Link>
                </div>
            </div>
        </main>
    )
}

export default Login
