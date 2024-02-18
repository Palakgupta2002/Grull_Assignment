
import './App.css'
import NavBar from './Components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Crousel from './Components/Crousel'
import FooterComponent from './Components/FooterComponent'

function App() {
  return (
   <div>
    <NavBar/>
    <div className='carousel-container'>
        <Crousel />
      </div>
   <div className='otherPages'>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Shop' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    <FooterComponent/>
   </div>
   </div>
  )
}

export default App
