import React, { useContext}from 'react';
import { CounterContext } from './counterContext';

function UserList() {
  let [users,setUsers]=useContext(CounterContext)
  function deleteUser(index) {
    const copyUsers = [...users];
    copyUsers.splice(index, 1);
    setUsers(copyUsers);
}

  return (
    <div>
       <p className="lead fs-2 text-center text-white">User List</p>
       {users.length > 0 ? (
          <div>
            <table className="table text-center table-secondary">
              <thead>
                <tr>
                  <th colSpan={3}>User</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn bg-danger"
                          onClick={()=>deleteUser(i)}
                          style={{ height: "33px", fontSize: "15px" }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="fs-3 text-warning bg-danger w-50 text-center mx-auto" style={{ borderRadius: "10px" }}>
            Currently No Users
          </p>
        )}
    </div>
  );
}

export default UserList;
