import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Accueil from './pages/accueil.jsx'
import './index.module.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { Router } from 'express'
import Root from './routes/root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/accueil",
    element: <Accueil />,
  }
  // Exemple de route
  // {
  //   path: "/example",
  //   element: <ExamplePage />,
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
