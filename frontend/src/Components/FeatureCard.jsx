

const FeatureCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x250" alt="Product" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Product Name</h3>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id libero.</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold">$99.99</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
