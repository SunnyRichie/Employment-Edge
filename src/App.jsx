import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Sidebar from './Components/LandingPage/SideBar/Sidebar'

function App() {
 
  return (
    <BrowserRouter>
    {/* Let your routes come in here */}
   
    <Sidebar/>
    </BrowserRouter>
  )
}

export default App
