import React, { useState } from "react";
import Table from "./table";
import Appoint from "./appoint";
export default function AppointTable(){
 const [tableData, setTableData] = useState([])
 const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    message: "",
    date: "",
    time:""
  })
 
 const handleChange=(e)=>{  
     const newInput = (data)=>({...data, [e.target.name]:e.target.value})
    setState(newInput)
 }

  
 const handleSubmit= (e) =>{
     e.preventDefault();
     const checkEmptyInput = !Object.values(state).every(response=>response==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, state])
      setTableData(newData);
      const empty= {fname: "",
      lname: "",
      phone: "",
      message: "",
      date: "",
      time:""}
      setState(empty)
     }
 }  
 return(
     <React.Fragment>
     <div className="container-appointment">
     <div className="row">
        <div className="col-lg-8">
        <Appoint handleChange={handleChange} state={state} handleSubmit={handleSubmit}/>
        </div>
        <div className="col-lg-4">
        <div className="card">
            <div className="card-header">
            Appointment Tracker
            </div>
            <div className="card-body">
            <Table tableData={tableData}/>
            </div>
            </div>
        </div>
     </div>
    </div>
     </React.Fragment>
 );
}
