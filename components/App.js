import React, { useState } from 'react';
import './index.css';
import { Appointment } from './appointment.js';

export default function App() {
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
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <main>
                <div class="container">
                    <section class="sect1">
                    <h3 class="question"></h3>
                    <div class="form-check">
                    </div>
                    <h3 class="question"></h3>
                    <div class="form-check">
                    </div>
                    <h3 class="question"></h3>
                    <div class="form-check">
                    </div>
                    </section>
                    <section class="sect2">
                        <div class="new-container">
                            <div class="card" style="width: 20rem;">
                            </div>
                        </div>
                    </section>
                    <section class="sect3">
                        <ul class="info">
                        </ul>
                    </section>
                </div>
            </main>
            <div class="footer-basic">
                <footer>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
    )
}