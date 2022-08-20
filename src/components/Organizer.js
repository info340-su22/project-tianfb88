import React from "react";

function Organizer(props) {
  return (
    <>
      <main className="organizer-main">
        <div className="card m-5">
          <div className="card-body">
            <div className="part-1">
              <div className="card-title">
                <h3>Upcoming Appointments</h3>
              </div>
              <div className="card-info">
                <ol>
                  <li>
                    <strong>August 15 </strong>Twelve{" "}
                  </li>
                  <li>
                    <strong>August 21 </strong>Hub U{" "}
                  </li>
                  <li>
                    <strong>September 02 </strong>The M{" "}
                  </li>
                </ol>
              </div>

              <div className="card">
                <div className="card-title">
                  <h3>Meeting Location </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Organizer;
