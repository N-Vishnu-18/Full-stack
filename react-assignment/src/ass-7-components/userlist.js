import React from 'react'

function Userlist(props) {
  return (
    <div>
       <table className="table text-center table-primary">
                    <thead>
                        <tr>
                        <th>Username</th>
                        <th>Dob</th>
                        <th>State</th>
                        <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        props.data.map((user,i)=>{
                            return(
                                <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.dob}</td>
                            <td>{user.state}</td>
                            <td>
                                <button className="btn bg-danger " onClick={()=>props.del(i)}>X</button>
                            </td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
    </div>
  )
}

export default Userlist