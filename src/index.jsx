import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout.jsx'
import ReactDOM from 'react-dom/client';
import Band from './components/Band.jsx';
import Contact from './components/Contact.jsx';
import More from './components/more.jsx';
import Tour from './components/Tour.jsx';
import Home from './components/Home.jsx';
import './index.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/band' element={<Band/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/tour' element={<Tour/>}/>
    <Route path='/more' element={<More/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
 