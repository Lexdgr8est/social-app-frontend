import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../components/Triangle";

const Landing = () => {
  return (
    <>
    {/* Header */}
    <header className="header">
      <div className="container flex">
        <h1 className="title">SOCiaL</h1>
        <nav className="navbar">
            <ul>
                <li><i className="fas fa-user-plus"></i> <Link to="/signup">Sign Up</Link> </li>
                <li><i className="fas fa-sign-in-alt"></i> <Link to="/login">Login</Link> </li>
            </ul>
        </nav>
      </div>
    </header>

    {/* Showcase */}
    <section className="showcase">
        <Triangle />
        <div className="container flex">
            <div className="showcase-content">
                <p>Adipisicing elit. Odit vero reprehenderit rem quidem impedit commodi.</p>
                <Link className="btn" to="/signup">Sign Up</Link>
            </div>
            <div className="showcase-image">
                <img src="images/banner.png" alt="banner"></img>
            </div>
        </div>
    </section>

    {/* Cards */}
    <section className="cards">
        <div className="container flex">
            <div className="card">
                <div className="icon"><img src="images/social1.png" alt="soc"/></div>
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi numquam, natus aspernatur similique quo.</p>
            </div>
            <div className="card prime">
                <div className="icon"><img src="images/social2.png" alt="soc"/></div>
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi numquam, natus aspernatur similique quo.</p>
            </div>
            <div className="card">
                <div className="icon"><img src="images/social3.png" alt="soc"/></div>
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi numquam, natus aspernatur similique quo.</p>
            </div>
        </div>
    </section>

    {/* Contact */}
    <section className="contact">
        <div className="container">
            <div className="form-wrap">
                <h1>Contact Us</h1>
                <div className="flex">
                    <div className="contact-image">
                        <img src="images/mail.png" alt="contact"/>
                    </div>
                    <form>
                        <div className="wrap">
                            <input type="text" placeholder="Full Name" required/>
                        </div>
                        <div className="wrap">
                            <input type="Email" placeholder="Email" required/>
                        </div>
                        <div className="wrap">
                            <input type="text" placeholder="Message" required/>
                        </div>
                        <div className="wrap">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}

    <footer>
        <div className="container flex">
            <div className="social">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
            </div>
            <div className="credits">
                Contact . Support . Info
            </div>
            <div className="privacy">
                &copy; 2020 Raji Oladeji
            </div>
        </div>
    </footer>

    </>
  );
};

export default Landing;
