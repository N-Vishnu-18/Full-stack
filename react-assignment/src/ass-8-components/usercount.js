import React, { useContext}from 'react';
import { CounterContext } from './counterContext';


function UserCount() {
  let [users]=useContext(CounterContext)
  return (
    <div>
        <p className="lead fs-2 text-center text-white">User Count</p>
        {
          <h3 className="text-center text-white">{users.length}</h3>
        }
    </div>
  );
}

export default UserCount;
