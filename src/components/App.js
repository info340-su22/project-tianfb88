import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Appointment from './appointment';
import Crowdsource from './crowdsource';
import PageFilter from './home';
import Nav from './Nav';
import About from './AboutUs';
import APT from '../data/aptData.json';

function App(props) {
    return (
            <Routes>
                <Route path= "/" element={<Nav />} >
                    <Route path ='home' element={<PageFilter apartments={APT}/>} />
                    <Route path="crowdsource/*" element={<Crowdsource />} />
                    <Route path="appointment" element={<Appointment/>} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
    )
}

export default App;