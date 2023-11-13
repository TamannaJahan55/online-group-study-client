import { useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";


const Features = () => {

    const features = useLoaderData();
    console.log(features);

    return (
        <div className="bg-gray-300">
            <div className="mx-10 my-5">
                <h2 className="text-5xl font-bold text-center text-blue-700 mb-5">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        features.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Features;