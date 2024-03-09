import './App.css';
import Home from './components/class10-LocalApi/home'
import Login from './components/class10-LocalApi/login'
import Register from './components/class10-LocalApi/register' 
import Errorroute from './components/class10-LocalApi/errorroute';
import Userdashboard from './components/class10-LocalApi/userdashboard';



import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootlayout from './components/class10-LocalApi/Rootlayout';
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
          path:'dashboard/:email',
          element:<Userdashboard/>
        },


      ]
    }
   
  ])

 return (
    <div >
      {/* <h1  className='text-danger display-4 bg-warning' style={{margin:"auto",width:"500px"}}>Welcome to React</h1> */}

       {/* provide browser router object to application */}
       <RouterProvider router={router}/>
      
      
    </div>
  );
}

export default App;
