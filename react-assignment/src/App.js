import './App.css';
import Home from './ass-9-components/home'
import Login from './ass-9-components/login'
import Register from './ass-9-components/register'
import Technologies from'./ass-9-components/technologies'
import Errorroute from './ass-9-components/errorroute';
import Angular from './ass-9-components/technologies/angular'
import React from './ass-9-components/technologies/react'
import Vue from './ass-9-components/technologies/vue'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootlayout from './ass-9-components/Rootlayout';
function App() {
  //browser router object
  let router=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      errorElement:<Errorroute/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'angular',
              element:<Angular/>
            },
            {
              path:'react',
              element:<React/>
            },
            {
              path:'vue',
              element:<Vue/>
            }

          ]
        },

      ]
    }
   
  ])

 return (
    <div >
   
       <RouterProvider router={router}/>
      
      
    </div>
  );
}

export default App;
