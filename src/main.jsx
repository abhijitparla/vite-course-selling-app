import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WelcomPage from './components/WelcomPage.jsx'
// import SignupPage from './components/Signup/SignupPage.jsx'
import './index.css'
import { createBrowserRouter,
  RouterProvider, } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import AddNewCourse from './components/AddNewCourse.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomPage/>,
    },
    {
      path: "/login",
      element: <App type={'login'}/>
    },
    {
      path: "/signup",
      element: <App type={'signup'}/>
    },{
      path:"/dashboard",
      element: <Dashboard/>
    },{
      path:'/addNewCourse',
      element: <AddNewCourse/>
    }

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
