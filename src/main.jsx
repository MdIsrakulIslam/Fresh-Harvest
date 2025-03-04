import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"
import Root from './components/Root/Root.jsx'
import Errorpage from './components/Errorpage/Errorpage.jsx'
import Home from './components/Home/Home.jsx'
import Productdetail from './components/Productdetail/Productdetail.jsx'
import ListedItem from './components/ListedItem/ListedItem.jsx'
import { ToastContainer} from 'react-toastify';

const router =createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:
    [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'products/:id',
        element:<Productdetail></Productdetail>,
        loader:()=> fetch('/product.json')

      },
      {
        path:'ListedItem',
        element:<ListedItem></ListedItem>,
        loader:()=>fetch('/product.json')
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>,
)
