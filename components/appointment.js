import React, { useState } from "react"

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
    <body class="appointment">
    <div class="main-block">
      <form class="makeAppointment" action="/">
        <br/>
          <h2 class="appoint">Appointment Information</h2>
          <br/>
          <div class="item">
            <label for="fname">Visitor's First Name</label>
            <input id="fname" type="text" name="fname" value={state.fname} onChange={handleChange}/>
          </div>
          <div class="item">
            <label for="lname">Visitor's Last Name</label>
            <input id="lname" type="text" name="lname" value={state.lname} onChange={handleChange}/>
          </div>
          <div class="item">
            <label for="phone">Phone Number</label>
            <input id="phone" type="text" name="phone" value={state.phone} onChange={handleChange}/>
          </div>
          <div class="item">
            <label>check UW student</label>
            <div class="studentAnswer">
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
          <div class="item">
            <label for="date">Date<span>*</span></label>
            <input id="date" type="date" name="date"/>
          </div>
          <div class="item">
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
          <div class="item">
            <label>Meeting Location</label>
            <div class="MeetingLocation">
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
          <div class="item">
            <label for="box">Please text in the room type(s) you want to visit </label>
            <textarea id="box" rows="3" name="message" value={state.message} onChange={handleChange}/>
          </div>
        <div class="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
  </body>
  )
}
