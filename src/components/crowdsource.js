import React, { useState } from 'react';
import Footer from './footer';
import { Routes, Route, Link } from 'react-router-dom';
import Appointment from './appointment';
import Crowdsource from './crowdsource';
import PageFilter from './home';
//import Organizer from './Organizer';
import Profile from './profile';

import SectionThree from './sect3';
import Nav from './Nav';
import About from './AboutUs';



export default function CrowdSource(props) {
    const[rating, setRating] = useState(null);
    const handleClick = (event) => {
        
    }
    
    return(
        <div className='crowd'>
            
            <Routes>
                <Route path="nav" element={<Nav />} />
                <Route path="crowdsource" element={<Crowdsource />} />
                <Route path="about" element={<About />} />
            </Routes>
            <main>
                <div className="main-block">
                    <form className="rate" action="/">
                    <h2 className="resident">Residents Rating</h2>
                    <h5>Apartment Name</h5>
                    <input type="text"/>
                    <div>
                        <table>
                        <tr>
                            <th className="second-col"></th>
                            <th>On Campus</th>
                            <th>Off Campus</th>
                        </tr>
                        <tr>
                            <td className="second-col">Location</td>
                            <td><input type="radio" value="On-campus Apartment" name="location" /></td>
                            <td><input type="radio" value="Off-campus Apartment" name="location" /></td>
                        </tr>
                        <tr>
                            <th className="second-col"></th>
                            <th>Studio</th>
                            <th>1B</th>
                            <th>2B</th>
                            <th>3B</th>
                            <th>4B</th>
                        </tr>
                        <tr>
                            <td className="second-col">Floor Plans</td>
                            <td><input type="checkbox" value="Studio" name="floor" /></td>
                            <td><input type="checkbox" value="1B" name="floor" /></td>
                            <td><input type="checkbox" value="2B" name="floor" /></td>
                            <td><input type="checkbox" value="3B" name="floor" /></td>
                            <td><input type="checkbox" value="4B" name="floor" /></td>
                        </tr>
                        <tr>
                            <th className="first-col"></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                        <tr>
                            <td className="first-col">1. Distance to UW Campus</td>
                            <td><input type="radio" value="1" name="distance" /></td>
                            <td><input type="radio" value="2" name="distance" /></td>
                            <td><input type="radio" value="3" name="distance" /></td>
                            <td><input type="radio" value="4" name="distance" /></td>
                            <td><input type="radio" value="5" name="distance" /></td>
                        </tr>
                        </table>
                    </div>
                    <p className="comments">Any further comment</p>
                    <textarea rows="5"></textarea>
                    <div className="btn-block">
                        <button className="sub" type="submit" href="/" onChange={handleClick}>Send</button>
                    </div>
                    </form>
                </div>
            </main>
            <div className="footer-basic">
                <Routes>
                    <Route path='footer' element={<Footer />} />
                </Routes>
            </div>
        </div>
    )
}