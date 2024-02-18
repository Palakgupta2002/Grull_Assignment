import FeatureCard from "./FeatureCard"


const FeatureProduct = () => {
  return (
    <div>
      <div className="flex justify-center mt-9 text-4xl"><span>FEATURED PRODUCTS</span></div>
      <div className="flex p-10 flex-wrap gap-10 justify-center">
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
    </div>
    </div>
  )
}

export default FeatureProduct