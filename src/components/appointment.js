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
    <div>
      <main>
        <div className="main-block">
          <form className="makeAppointment" action="/">
            <br/>
              <h2 className="appoint">Appointment Information</h2>
              <br/>
              <div className="item">
                <label htmlFor="fname">Visitor's First Name</label>
                <input id="fname" type="text" name="fname" value={state.fname} onChange={handleChange}/>
              </div>
              <div className="item">
                <label htmlFor="lname">Visitor's Last Name</label>
                <input id="lname" type="text" name="lname" value={state.lname} onChange={handleChange}/>
              </div>
              <div className="item">
                <label htmlFor="phone">Phone Number</label>
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
                    <label htmlFor="uwStudent"> check</label>
                  </div>
                </div>
              </div>
              <div className="item">
                <label htmlFor="date">Date<span>*</span></label>
                <input id="date" type="date" name="date"/>
              </div>
              <div className="item">
                <label>Time</label>
                <select
                    name="location"
                    value={state.location}
                    onChange={handleChange}
                >
                  <option defaultValue=""></option>
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
                    <label htmlFor="gate" className="radio"><span>Main Gate</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="office" id="office" name="location" checked={state.location === 'office'} onChange={handleChange}/>
                    <label htmlFor="office" className="radio"><span>Leasing Office</span></label>
                  </div>
                </div>
              </div>
              <div className="item">
                <label htmlFor="box">Please text in the room type(s) you want to visit </label>
                <textarea id="box" rows="3" name="message" value={state.message} onChange={handleChange}/>
              </div>
            <div className="btn-block">
              <button type="submit" href="/">Submit</button>
            </div>
          </form>
        </div>
      </main>
  </div>
  )
}
