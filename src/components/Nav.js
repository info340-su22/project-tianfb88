import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav(props) {
    return(
        <div>
            <header>
                <div className="container">
                    <h1>Find My Apartment</h1>
                    <p className="app-descr">UW</p>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/crowdsource" className="nav-link">Crowd Source <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link" href="#">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link" href="#"></Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}