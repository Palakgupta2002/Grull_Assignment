import {  Navbar } from 'flowbite-react';
import { useState, useEffect } from 'react';
import LoginPage from '../Pages/LoginPage';
import { Link} from 'react-router-dom';

const NavBar = () => {
    const [openModal, setOpenModal] = useState(false); // Start with modal closed

    // useEffect(() => {
    //     // Set openModal to true only if the path includes "/Login"
    //     setOpenModal(window.location.pathname.includes("/Login"));
    // }, []);

    return (
        <div>
            <Navbar fluid rounded className='bg-transparent'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img className='absolute p-3' width={"200px"} alt="dev shopping" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='p-5 text-white'>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/Shop">Shop</Link>
                    </div>
                    <div>
                        <Link to='/Cart'>Cart</Link>
                    </div>
                    <div>
                    <span onClick={() => setOpenModal(true)}>Login</span>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            {/* Render the LoginPage component conditionally based on the openModal state */}
            {openModal && <LoginPage onClose={() => setOpenModal(false)} />}
        </div>
    )
}

export default NavBar;
