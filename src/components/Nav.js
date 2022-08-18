import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav(props) {
    let savedList = props.apartments.map((apt) => {
        return (
            <Link to={"search/search/" + apt.name} className="dropdown-item">{apt.name}</Link>
        )
    })

    return(
        <div className="row">
            <div className="header">
                <h1 className="logo">FindMyApartment</h1>
                <div className="header-right">
                <li className="navbar-item">
                <Link to="/home" className="active">Home</Link> 
                        </li>
                        <li className="navbar-item">
                        <Link to="/crowdsource">Crowd Source</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/appointment">Appointment</Link>
                        </li>
                    <li className="nav-item dropdown">
                            <div className="drop-list">
                                <a href="#" className="nav-link dropdown-toggle text-white" data-toggle="dropdown">Saved List</a>
                                <div className="dropdown-menu">
                                    {/* <a href="info.html" className="dropdown-item">Harvard University</a>
                                    <a href="#" className="dropdown-item">Boston University</a> */}
                                    {savedList}
                                </div>
                            </div>
                        </li>
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