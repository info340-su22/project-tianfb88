export default function Appoint({handleChange, state, handleSubmit}) {
return(
    <div className="main-block">
          <form className="makeAppointment"  onSubmit={handleSubmit} action="/">
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
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" value={state.date} onChange={handleChange}/>
              </div>
              <div className="item">
                <label>Time</label>
                <select
                    name="time"
                    value={state.time}
                    onChange={handleChange}
                >
                  <option defaultValue=""></option>
                  <option value="9am-10am" >9am - 10am</option>
                  <option value="10am-11am">10am - 11am</option>
                  <option value="11am-12pm">11am - 12pm</option>
                  <option value="2pm-3pm" >2pm - 3pm</option>
                  <option value="3pm-4pm">3pm - 4pm</option>
                  <option value="4pm-5pm">4pm - 5pm</option>
                  <option value="5pm-6pm">5pm - 6pm</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="box">Please text in the apartment name you want to visit </label>
                <textarea id="box" rows="3" name="message" value={state.message} onChange={handleChange}/>
              </div>
            <div className="btn-block">
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
)
}