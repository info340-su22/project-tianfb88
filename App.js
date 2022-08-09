import React, { useState } from 'react';
import {filter} from './filter';
import {crowdsource} from './crowdsource';

export default function App(props) {
    return (
        <body>
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
                    <a className="nav-link" href='#'>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="crowdsource.html">Crowd Source</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="About_us.html">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <main>
                <div className="container">
                    <section className="sect1">
                        <filter />
                    </section>
                    <section className="sect2">
                        <div className="new-container">
                            <div className="card" style="width: 20rem;">
                            </div>
                        </div>
                    </section>
                    <section className="sect3">
                        <ul className="info">
                        </ul>
                    </section>
                </div>
            </main>
            <div className="footer-basic">
                <footer>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
    )
}