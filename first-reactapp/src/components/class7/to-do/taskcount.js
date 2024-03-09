import React from 'react'

function taskcount(props) {
  return (
    <div>
        <p className="lead fs-2 text-center">taskcount</p>
        {
          <h5 className="text-center">{props.tasks.length}</h5>
        }
    </div>
  )
}

export default taskcount