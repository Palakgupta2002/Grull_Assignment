
import { Provider } from 'react-redux'
import appStore from './utils/Appstore'
import NavBar from './Components/Navbar'
import Crousel from './Components/Crousel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import { FooterComponent } from 'flowbite-react'

const Body = () => {
  return (
    <Provider store={appStore}>
    <div>
    <NavBar/>
    {/* <NavBarr/> */}

    <div className='carousel-container'>
        <Crousel />
      </div>
   <div className='otherPages'>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Login' element={<LoginPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
   
    <FooterComponent/>
   </div>
   </div>
   </Provider>
  )
}

export default Body