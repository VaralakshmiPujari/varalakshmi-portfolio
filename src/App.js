import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import About from'./components/About'
import Home from './components/Home'
import Pnf from './components/Pnf'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './Header/Footer'
import Menu from './Header/Menu'
import './index.css';
function App() {
  return (
    <BrowserRouter>
    <Menu/>

    <Routes>
    <Route path={`/`} element={<Home/>} />
    <Route path={`/Home`} element={<Home/>} />
    <Route path={`/About`} element={<About/>} />
    <Route path={`/*`} element={<Pnf/>} />
    <Route path={`/Profile`} element={<Profile/>} />
    <Route path={`/Portfolio`} element={<Portfolio/>} />
    <Route path={`/Contact`} element={<Contact/>} />
  
    </Routes>
     <Footer/>
    </BrowserRouter>
  )
}
export default App