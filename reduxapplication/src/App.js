import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Rootlayout from './components/rootlayout';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'


import './App.css';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      children:[
        {
          path:'sample-1',
          element:<Sample1/>,
          children:[
            {
              path:'test-1',
              element:<Test1/>
              
            },
            {
              path:'test-2',
              element:<Test2/>
    
            }
          ]

        },
        {
          path:'sample-2',
          element:<Sample2/>,
          children:[
            {
              path:'test-3',
              element:<Test3/>
              
            },
            {
              path:'test-4',
              element:<Test4/>
    
            }
          ]

        }
      ]

    }
  ]);

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
