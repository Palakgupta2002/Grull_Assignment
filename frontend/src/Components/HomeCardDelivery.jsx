
import discount1 from "../assets/discount (1).svg"
import discount2 from "../assets/discount (2).svg"
import discount3 from "../assets/discount (3).svg"

const HomeCardDelivery = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap">
        <div className="flex border-2 border-solid border-red-500 gap-5 items-center px-5 py-2 shadow-lg bg-blue-200 text-white">
            <div className="w-10"><img  src={discount1} alt="" /></div>
            <div className="text-2xl"><span>Discount</span></div>
        </div>
        <div className="flex border-2 border-solid border-red-500 gap-5 px-5 py-2">
            <div className="w-10"><img src={discount2} alt="" /></div>
            <div className="text-2xl"><span>Track Orders</span></div>
        </div>
        <div className="flex border-2 border-solid border-red-500 gap-5 px-5 py-2 ">
            <div className="w-10"><img src={discount3} alt="" /></div>
            <div className="text-2xl"><span>Express Delivery</span></div>
        </div>
    </div>
  )
}

export default HomeCardDelivery