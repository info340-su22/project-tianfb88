import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Appointment from './appointment';
import Crowdsource from './crowdsource';

//import Organizer from './Organizer';
import Profile from './profile';

import SectionThree from './sect3';
import Nav from './Nav';
import About from './AboutUs';
import PageFilter from './home';


function App(props) {
    let apartments = props.apartments;

    return (
        <Routes>
        <Route path="home" element={<App />} />
        <Route index element={<App />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="crowdsource" element={<Crowdsource />} />
        </Routes>
    )


}

export default App;