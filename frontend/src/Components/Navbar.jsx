import {  Navbar } from 'flowbite-react';
import { useState, useEffect } from 'react';
import LoginPage from '../Pages/LoginPage';

const NavBar = () => {
    const [openModal, setOpenModal] = useState(false); // Start with modal closed

    useEffect(() => {
        // Set openModal to true only if the path includes "/Login"
        setOpenModal(window.location.pathname.includes("/Login"));
    }, []);

    return (
        <div>
            <Navbar fluid rounded className='bg-transparent'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img className='absolute p-3' width={"200px"} alt="dev shopping" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='p-5'>
                    <Navbar.Link href="/" active>
                        <span className='text-white text-xl'>Home</span>
                    </Navbar.Link>
                    <Navbar.Link  href="/Shop">
                        <span onClick={() => setOpenModal(false)} className='text-white text-xl'>Shop</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className='text-white text-xl'>About us</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className='text-white text-xl' onClick={() => setOpenModal(true)}>Login</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className='text-white text-xl'>Cart</span>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            {/* Render the LoginPage component conditionally based on the openModal state */}
            {openModal && <LoginPage onClose={() => setOpenModal(false)} />}
        </div>
    )
}

export default NavBar;
