function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>First N</th>
                    <th>Last N</th>
                    <th>Phone</th>
                    <th>Apartment</th>
                    <th>Date</th>
                    <th>Time</th>
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