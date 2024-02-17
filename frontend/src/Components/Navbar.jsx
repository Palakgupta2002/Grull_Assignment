
import { Navbar } from 'flowbite-react'


const NavBar = () => {
    return (
        <Navbar fluid rounded className='bg-transparen' >
            <Navbar.Brand href="https://flowbite-react.com">
                <img className='absolute p-3' width={"200px"} alt="dev shopping" />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='p-5'>
                <Navbar.Link href="#" active  >
                    <span className='text-white text-2xl'>Home</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className='text-white text-2xl'>Home</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className='text-white text-2xl'>Home</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className='text-white text-2xl'>Home</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className='text-white text-2xl'>Home</span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar