import React, { useState } from 'react';

export default function profile() {
    return (
        <body>
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
                    <a class="nav-link" href='#'>Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="crowdsource.html">Crowd Source<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="About_us.html">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Account</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <main>
                <form action="action_page.php" style="border:1px solid #ccc">
                    <div class="container">
                        <h3>Create your account</h3>
                        <p>Please fill in the following information to create an account.</p>
                        <hr></hr>
        
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>
        
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>
        
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
        
                        <label>
                            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me
                            </input>
                        </label>
        
                        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
        
                        <div class="clearfix">
                            <button type="button" class="cancelbtn">Sign Up</button>
                            <button type="submit" class="signupbtn">Cancel</button>
                        </div>
                    </div>
                </form>
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