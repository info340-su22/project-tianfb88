function Table({tableData}){
    return(
        <table className="table">
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <ul key={index}>
                            <li>{index+1}</li>
                            <li>First Name: {data.fname}</li>
                            <li>Last Name: {data.lname}</li>
                            <li>Phone Number: {data.phone}</li>
                            <li>Apartment: {data.message}</li>
                            <li>Date: {data.date}</li>
                            <li>Time: {data.time}</li>
                        </ul>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;