import girlImage from "../assets/OfferImage.png"
import "../App.css"
import { Button } from "flowbite-react"
import discountLogo from "../assets/discountImageLogo.png"

const DiscountOfferPage = () => {
    return (
        <div>
            <div className="relative mt-20"></div>
            <div className=" absolute z-10 -mt-40 flex w-full">
                <img src={girlImage} />
            </div>
            <div className="wallImage h-full relative">
                <div className="block md:flex justify-end">
                    <div className="w-1/2">
                        <div className="mb-4 w-16"><img src={discountLogo} alt="" /></div>
                        <div className="mb-4"><span className="text-3xl">25% OFF</span></div>
                        <div className="mb-4"><span className="text-4xl">On All Orders Above RS 999</span></div>
                        <div className="mb-4"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid consequuntur saepe quo reprehenderit nihil recusandae quibusdam explicabo nostrum minima quia incidunt totam non iusto, id sapiente quam, ab voluptas.</span></div>
                        <div><Button className="cursor-pointer z-10">GRAB THIS OFFER</Button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DiscountOfferPage