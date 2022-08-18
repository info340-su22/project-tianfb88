function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Apartment</th>
                    <th>Visit Date</th>
                    <th>Visit Time</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.phone}</td>
                            <td>{data.message}</td>
                            <td>{data.date}</td>
                            <td>{data.time}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;