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
}