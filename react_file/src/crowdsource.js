import React, { useState } from 'react';

export default function CrowdSource(props) {
    const[rating, setRating] = useState(null);
    const handleClick = (event) => {
        
    }
    
    return(
        <body className="crowd">
            <header>
                <div className="container">
                <h1>Crowd Source</h1>
                <p className="app-descr">real ratings</p>
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
                    <a className="nav-link" href='all.html'>Home</a>
                    </li>
                    <li classname="nav-item">
                    <a className="nav-link" href="#">Crowd Source<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="About_us.html">About Us</a>
                    </li>
                    <li classNme="nav-item">
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
                <div className="main-block">
                    <form className="rate" action="/">
                    <h2 className="resident">Residents Rating</h2>
                    <h5>Apartment Name</h5>
                    <input type="text"/>
                    <div>
                        <table>
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
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                        </tr>
                        <tr>
                            <td className="first-col">2. Affordability</td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                        </tr>
                        <tr>
                            <td className="first-col">3. Safety</td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                        </tr>
                        <tr>
                            <td className="first-col">4. Amenities</td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                        </tr>
                        <tr>
                            <td className="first-col">5. Various Floor Plans</td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                        </tr>
                        <tr>
                            <td className="first-col">6. Public Facilities</td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
    )
}