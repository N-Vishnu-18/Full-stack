import React from 'react';
import UserCount from "./usercount";
import UserList from "./userlist";
import AddUser from "./adduser";
import Store from './store';

function ManageUsers() {
    return (
        <Store>
        <div>
            <div className="row justify-content-center mx-auto mt-5" style={{ width: "1400px" }}>
                <h2 className="text-center text-white">User Management</h2>
                
                <div className="col-sm-4 border p-4"><AddUser  /></div>
                <div className="col-sm-4 border p-4"><UserList  /></div>
                <div className="col-sm-4 border p-4"><UserCount /></div>
                

            </div>
        </div>
        </Store>
    );
}

export default ManageUsers;

