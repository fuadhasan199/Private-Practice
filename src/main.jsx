import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx' 
import MainLayout from './MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx'; 
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';





const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Home></Home> 

      } ,  
      { 
                path:'/About' , 
                element:<PrivateRoute> 
                   <About></About>
                </PrivateRoute>
               
      } ,
      {
        path:"/Login",
        element:<Login></Login>
      } ,
      {
        path:'/Register',
        element:<Register></Register>
      }
 

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
 <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
     
    
  </StrictMode>,
)
