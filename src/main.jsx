import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Donation from './Components/Donation';
import Volunter from './Components/Volunter';
import UpdateDonate from './Components/UpdateDonate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/don",
        element:<Donation></Donation>
      },
      {
        path:"/vol",
        element:<Volunter></Volunter>
      },
      {
        path:"/upd/:id",
        element:<UpdateDonate></UpdateDonate>,
        loader: ({params})=> fetch(`http://localhost:5000/volunteer/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
