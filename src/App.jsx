import { } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './componnts/NavBar'
import Home from './pages/home'
import AddUser from './users/AddUser'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      
      <NavBar/>
    <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
    </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
