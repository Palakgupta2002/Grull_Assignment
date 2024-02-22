import { Button } from "flowbite-react";
import image1 from "../assets/wallpaper3.webp"
const ProductCollection = () => {
    return (
        <div className=' hidden md:flex justify-center w-full  gap-10 p-10'>
            <div className='  relative'>
                <img src={image1} className="w-full h-full object-cover" alt="Product 1" />
                <Button className="absolute top-1/2 w-1/2  left-1/4 m-4 text-nowrap bg-slate-300">view collection</Button>
            </div>
            <div>
                <div className='flex justify-center gap-9 '>
                    <div className="w-full relative">
                        <img src={image1} className="w-full h-full object-cover" alt="Product 2" />
                        <Button className="absolute w-1/2 left-1/4 m-4 top-1/2 text-nowrap bg-slate-300">view collection</Button>
                    </div>
                    <div className="relative">
                        <img src={image1} className="w-full h-full object-cover" alt="Product 3" />
                        <Button className="absolute w-1/2 top-1/2 left-1/4 m-4 text-nowrap bg-slate-300">view collection</Button>
                    </div>
                </div>
                <div className='  relative'>
                    <img src={image1} className="w-full h-full object-cover" alt="Product 4" />
                    <Button className="absolute w-1/2 top-1/2 left-1/4 m-4 text-nowrap bg-slate-300">view collection</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCollection;
