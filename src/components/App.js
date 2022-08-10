import React, { useState } from 'react';
import {Filter} from './filter';
import { Link } from "react-router-dom";

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
                    <Link to="crowdsource" className="nav-link">Crowd Source <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
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
                        <Filter />
                    </section>
                    <section className="sect2">
                        <div className="new-container">
                        <div className="card" style="width: 20rem;">
                        <img src="img/cedar.jpg" alt="gray color apartment building" />
                        <p>Cedar Apartments</p>
                        <ul>
                            <li>In-campus Apartment</li>
                            <li>Distance to campus: 0.7 mile</li>
                            <li>Address: 1112 NE 41st Street</li>
                        </ul>
                        <a href="https://hfs.uw.edu/campus-living/Undergraduate-Housing/Cedar-Apartments">
                            <button type="button" class="btn btn-info">official website</button>
                        </a>
                        <Link to='appointment'>
                            <button>make an appointment</button>
                        </Link>
                    </div>

                    <div class="card" style="width: 20rem;">
                        <img src="img/bridges.jpg" alt="multi-color apartment building"/>
                        <p>Bridges @ 11th Apartments</p>
                        <ul>
                            <li>Off-campus Apartment</li>
                            <li>Distance to campus: 1 mile</li>
                            <li>Address: 4557 11th Avenue NE</li>
                        </ul>
                        <a href="https://www.americancampus.com/student-apartments/wa/seattle/bridges-at-11th">
                            <button type="button" class="btn btn-info">official website</button>
                        </a>
                        <Link to='appointment'>
                            <button>make an appointment</button>
                        </Link>
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