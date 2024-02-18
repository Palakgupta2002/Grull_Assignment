import { Button, Carousel } from 'flowbite-react';
import "../App.css";
import background1 from "../assets/wallpaper1.jpg";
import background5 from "../assets/wallpaper4.jpg";

const Crousel = () => {
    return (
        <div className="relative min-h-screen h-full sm:h-full">
            <div className="absolute top-1/4  left-10 mt-4 ml-4 z-10 w-1/2  text-white text-wrap p-10">
                <div><span className='text-xl mb-5 md:text-5xl'>summer Collection</span></div>
                <div><span className='text-4xl'>title</span></div>
                <div className=' hidden md:hidden'><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum asperiores illo a unde commodi fugit eos. Tenetur quibusdam inventore temporibus placeat quisquam, excepturi optio facere esse voluptatibus, nesciunt quod.</span></div>
                <div className=''><Button className='w-1/2 md:w-fit text-nowrap rounded-lg bg-slate-200 text-black mt-4'>Visit us</Button></div>
            </div>
            <Carousel pauseOnHover className="h-full">
                <img src={background1} alt="..." className="h-full" />
                <img src={background1} alt="..." className="h-full" />
                <img src={background5} alt="..." className="h-full" />
                <img src={background1} alt="..." className="h-full" />
                <img src={background1} alt="..." className="h-full" />
            </Carousel>
        </div>

    );
};

export default Crousel;
