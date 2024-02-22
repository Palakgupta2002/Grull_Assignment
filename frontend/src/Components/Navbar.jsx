import { Button, Navbar } from 'flowbite-react';
import { useState, useEffect } from 'react';
import LoginPage from '../Pages/LoginPage';
import { Link } from 'react-router-dom';
import "../App.css"

const NavBar = () => {
    const [openModal, setOpenModal] = useState(false); // Start with modal closed

    // useEffect(() => {
    //     // Set openModal to true only if the path includes "/Login"
    //     setOpenModal(window.location.pathname.includes("/Login"));
    // }, []);

    return (
        <div >
            <Navbar fluid  className='bg-transparent'  >
                <Navbar.Brand href="https://flowbite-react.com">
                   <div className='text-white text-2xl italic'>Shopping Buddy</div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='p-5 text-2xl'>
                    <Button className='mt-2 rounded-full' outline><Link to="/">Home</Link></Button>
                    <Button className='mt-2 rounded-full' outline> <Link to='/Shop'>Shop</Link></Button>
                    <Button className='mt-2 rounded-full' outline> <Link to='/Cart'>Cart</Link></Button>
                    <Button className='mt-2 rounded-full' outline><span onClick={() => setOpenModal(true)}>Login</span></Button>
                </Navbar.Collapse>
            </Navbar>
            {/* Render the LoginPage component conditionally based on the openModal state */}
            {openModal && <LoginPage onClose={() => setOpenModal(false)} />}
        </div>
    )
}

export default NavBar;
