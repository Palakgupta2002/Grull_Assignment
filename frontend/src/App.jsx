
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

function App() {
  return (
   <Provider store={appStore}>
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
      <Route path='/Login' element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
   
    <FooterComponent/>
   </div>
   </div>
   </Provider>
  )
}

export default App
