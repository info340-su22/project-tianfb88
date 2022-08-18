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
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <Appoint handleChange={handleChange} state={state} handleSubmit={handleSubmit}/>
         <Table tableData={tableData}/>
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
     </React.Fragment>
 );
}
