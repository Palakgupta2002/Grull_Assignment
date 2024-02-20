
import './App.css'
import NavBar from './Components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Crousel from './Components/Crousel'
import FooterComponent from './Components/FooterComponent'
import LoginPage from './Pages/LoginPage'
import {Provider} from "react-redux"
import appStore from './utils/Appstore'
import Cart from './Pages/Cart'
// import NavBarr from './Components/NavBar2'

function App() {
  return (
   <Provider store={appStore}>
    <div>
   <BrowserRouter>
   <NavBar/>
   <div className='carousel-container'>
        <Crousel />
      </div>
   <div className='otherPages'>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Login' element={<LoginPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
   </div>
    </BrowserRouter>
   
    <FooterComponent/>
   </div>
  
   </Provider>
  )
}

export default App
