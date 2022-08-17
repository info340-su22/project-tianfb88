<<<<<<< HEAD
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav(props) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/home' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/crowdsource" className="nav-link">Crowd Source <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/appointment' className="nav-link" href="#">Appointment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link" href="#"></Link>
                    </li>
                </ul>
                </div>
            </nav>


        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">FindMyApartment © 2022</p>
        </footer>
        </div>
    )
=======
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav(props) {
    return(
        <div className="row">
            <div className="header">
                <h1 className="logo">FindMyApartment</h1>
                <div className="header-right">
                    <Link to="/home" className="active">Home</Link>
                    <Link to="/crowdsource">Crowd Source</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </div>
            
            <div className="body">
                <main>
                    <div className='container'>
                        <Outlet />
                    </div>
                </main>
            </div>
            <div className="foo">
                <div className="footer-basic">
                    <footer>
                        <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Home</a></li>
                            <li className="list-inline-item"><a href="#">Services</a></li>
                            <li className="list-inline-item"><a href="#">About</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p className="copyright">FindMyApartment © 2022</p>
                    </footer>
                </div>
            </div>
        </div>
    )
>>>>>>> cc7a70bc069009644331837523b628328d451f4f
}