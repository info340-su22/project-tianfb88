//export function
export default function Organizer(props) {
  let appointment = props.appointment

  let findMyApmt = appointment.map((eachApt) => {
    return <p> <span className="date">{eachApmt['apmtDate'] + ' '}</span> <span className="Apt-name">{eachApt['name']}</span> </p>
  })

//function to check upcoming appointments
  function ApmtTime() {
    return (
      <div className="part-1">
        <div className="card-title">
          <h3>Upcoming Appointments</h3>
        </div>
        <div className="card-info">
          {findMyApmt}
        </div>
      </div>
    )
  }


//meeting location: if not meet at the main gate, (else)meet at leasing office
  let meetLoc = appointment.map((eachApt) => {
    let count = 0
    if (eachApt['mainGate' === true) {
      count++
    }
    return count
  })

  let renderLoc = null
  if (meetLoc.includes(1)) {
      renderLoc = (
        <div>
          <p><strong>Meet At the Main Gate</strong></p>
        </div>
      )
    else (
      renderLoc = (
        <div>
          <p><strong>Meet At the Leasing Office</strong></p>
        </div>
      )
    )
  }


//function to check more details about upcoming appointments
  function ApmtDetail() {
    return (
      <div className="part-2">
        <div className="card-title">
          <h3>Upcoming Appointments</h3>
        </div>
        
        <div>
          {renderCommon}
          {renderEsssay}
        </div>

      </div>

    )
  }

//Manage upcoming appointments
  return (
    <div>
      <header className="main-header">
        <h2>Manage Your Upcoming Appointments</h2>
      </header>
        <div className="card mb-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mb-2">
                  <ApmtTime />
                  <ApmtDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
