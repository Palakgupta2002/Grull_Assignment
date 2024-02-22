
import photo from "../assets/wallpaper2.jpg"
const FeatureCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={photo} alt="Product" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Mens Wear</h3>
        <p className="text-gray-700 mb-4">view our collections</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold"> start from $99.99</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">View Collection</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
