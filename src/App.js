import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Routes/View/client/Layout/Layout';
import Home from './Routes/View/client/home/Home';
import Blogs from './Routes/View/client/blog/Blogs'
import Contact from './Routes/View/client/contact/Contact';
import About from './Routes/View/client/about/About';
import Register from './Routes/View/Auth/Register';
import Login from './Routes/View/Auth/Login';
import Error from './components/404/Error';
import './assets/scss/index.scss'
import 'bootstrap';

function App() {
  return (
    <div>
     <Routes>
        <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/blog' element={<Blogs/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<Error/>}/>
        </Route>
        <Route path='/auth'>
            <Route path='/auth/register' element={<Register/>}/>
            <Route path='/auth/login' element={<Login/>} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
