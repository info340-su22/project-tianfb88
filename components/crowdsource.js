import React, { useState } from 'react';

export default function CrowdSource(props) {
    const[rating, setRating] = useState(null);
    const handleClick = (event) => {
        
    }
    
    return(
        <body class="crowd">
            <header>
                <div class="container">
                <h1>Crowd Source</h1>
                <p class="app-descr">real ratings</p>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href='all.html'>Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Crowd Source<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="About_us.html">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <main>
                <div class="main-block">
                    <form class="rate" action="/">
                    <h2 class="resident">Residents Rating</h2>
                    <h5>Apartment Name</h5>
                    <input type="text"/>
                    <div>
                        <table>
                        <tr>
                            <th class="first-col"></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                        <tr>
                            <td class="first-col">1. Distance to UW Campus</td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                            <td><input type="radio" value="none" name="distance" /></td>
                        </tr>
                        <tr>
                            <td class="first-col">2. Affordability</td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                            <td><input type="radio" value="none" name="afford" /></td>
                        </tr>
                        <tr>
                            <td class="first-col">3. Safety</td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                            <td><input type="radio" value="none" name="safe" /></td>
                        </tr>
                        <tr>
                            <td class="first-col">4. Amenities</td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                            <td><input type="radio" value="none" name="amenity" /></td>
                        </tr>
                        <tr>
                            <td class="first-col">5. Various Floor Plans</td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                            <td><input type="radio" value="none" name="floor" /></td>
                        </tr>
                        <tr>
                            <td class="first-col">6. Public Facilities</td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                            <td><input type="radio" value="none" name="facility" /></td>
                        </tr>
                        </table>
                    </div>
                    <p class="comments">Any further comment</p>
                    <textarea rows="5"></textarea>
                    <div class="btn-block">
                        <button class="sub" type="submit" href="/" onChange={handleClick}>Send</button>
                    </div>
                    </form>
                </div>
            </main>
            <div class="footer-basic">
                <footer>
                    <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">FindMyApartment © 2022</p>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
    )
}