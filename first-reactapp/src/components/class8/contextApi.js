import React from 'react'
import A from './children/a'
import D from './children/d'
import Store from './store'
function contextApi() {
  return (
    <div className="bg-info w-50 mx-auto">
        <h1 className="text-center">contextApi</h1>
        <h3 className="text-center">Root</h3>
        <Store>
          <A/>
          <D/>
        </Store>

    </div>
  )
}

export default contextApi