<<<<<<< HEAD
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

=======
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
                    <Route path="appointment" element={<Appointment />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
    )
}

>>>>>>> cc7a70bc069009644331837523b628328d451f4f
export default App;