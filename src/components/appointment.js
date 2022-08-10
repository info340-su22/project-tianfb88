import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Appointment() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    message: "",
    location: "",
    uwCheck: false,
    location: ""
  })

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <body className="appointment">
      <header>
        <div className="container">
          <h1>Make Your Appointment</h1>
          <p className="app-descr">Visit Offline</p>
        </div>
      </header>
      <nav classNamw="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to="home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="crowdsource" className="nav-link">Crowd Source <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <Link to="profile" className="nav-link">Profile <span className="sr-only">(current)</span></Link>
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
          <form className="makeAppointment" action="/">
            <br/>
              <h2 className="appoint">Appointment Information</h2>
              <br/>
              <div className="item">
                <label for="fname">Visitor's First Name</label>
                <input id="fname" type="text" name="fname" value={state.fname} onChange={handleChange}/>
              </div>
              <div className="item">
                <label for="lname">Visitor's Last Name</label>
                <input id="lname" type="text" name="lname" value={state.lname} onChange={handleChange}/>
              </div>
              <div className="item">
                <label for="phone">Phone Number</label>
                <input id="phone" type="text" name="phone" value={state.phone} onChange={handleChange}/>
              </div>
              <div className="item">
                <label>check UW student</label>
                <div className="studentAnswer">
                  <div>
                    <input 
                        type="checkbox"
                        id="uwStudent"
                        name="uwCheck"
                        checked={state.uwCheck}
                        onChange={handleChange}/>
                    <label for="uwStudent"> check</label>
                  </div>
                </div>
              </div>
              <div className="item">
                <label for="date">Date<span>*</span></label>
                <input id="date" type="date" name="date"/>
              </div>
              <div className="item">
                <label>Time</label>
                <select
                    name="location"
                    value={state.location}
                    onChange={handleChange}
                >
                  <option selected value=""></option>
                  <option value="9-10" >9am - 10am</option>
                  <option value="10-11">10am - 11am</option>
                  <option value="11-12">11am - 12pm</option>
                  <option value="2-3" >2pm - 3pm</option>
                  <option value="3-4">3pm - 4pm</option>
                  <option value="4-5">4pm - 5pm</option>
                  <option value="5-6">5pm - 6pm</option>
                </select>
              </div>
              <div className="item">
                <label>Meeting Location</label>
                <div className="MeetingLocation">
                  <div>
                    <input type="radio" value="gate" id="gate" name="location" checked={state.location === 'gate'} onChange={handleChange}/>
                    <label for="gate" class="radio"><span>Main Gate</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="office" id="office" name="location" checked={state.location === 'office'} onChange={handleChange}/>
                    <label for="office" class="radio"><span>Leasing Office</span></label>
                  </div>
                </div>
              </div>
              <div className="item">
                <label for="box">Please text in the room type(s) you want to visit </label>
                <textarea id="box" rows="3" name="message" value={state.message} onChange={handleChange}/>
              </div>
            <div className="btn-block">
              <button type="submit" href="/">Submit</button>
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
