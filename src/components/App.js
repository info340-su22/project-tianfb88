import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Appointment from './appointment';
import Crowdsource from './crowdsource';
import PageFilter from './filter';
//import Organizer from './Organizer';
import Profile from './profile';
import Footer from './footer';
import SectionThree from './sect3';
import Nav from './Nav';
import About from './AboutUs';
import Header from './header';

import APT from '../data/aptData.json';

function App(props) {
    return (
        <div> 
            <Routes>
                <Routes path='header' element={<Header />} />
            </Routes>
            <Routes>
                <Route path="nav" element={<Nav />} />
                <Route path="crowdsource" element={<Crowdsource />} />
                <Route path="about" element={<About />} />
            </Routes>
            <div>
                <main>
                    <div className="container">
                        <section className="sect1">
                            <Routes>
                                <Route path="filter" element={<PageFilter apartments={APT} />} />
                            </Routes>
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
                                <button type="button" className="btn btn-info">official website</button>
                            </a>
                            <Link to='appointment'>
                                <button>make an appointment</button>
                            </Link>
                        </div>

                        <div className="card" style="width: 20rem;">
                            <img src="img/bridges.jpg" alt="multi-color apartment building"/>
                            <p>Bridges @ 11th Apartments</p>
                            <ul>
                                <li>Off-campus Apartment</li>
                                <li>Distance to campus: 1 mile</li>
                                <li>Address: 4557 11th Avenue NE</li>
                            </ul>
                            <a href="https://www.americancampus.com/student-apartments/wa/seattle/bridges-at-11th">
                                <button type="button" className="btn btn-info">official website</button>
                            </a>
                            <Link to='appointment'>
                                <button>make an appointment</button>
                            </Link>
                        </div>
                            </div>
                        </section>
                        <section className="sect3">
                            <Routes>
                                <Route path='sect3' element={<SectionThree />} />
                            </Routes>
                        </section>
                    </div>
                </main>
            </div>
            <Routes>
                <Route path='footer' element={<Footer />} />
            </Routes>
        </div>
    )
}

export default App;