import { use } from "react";
import ModelCard from "../ModelCard/ModelCard";


const Models = ({modelPromise, carts, setCarts}) => {


    const models = use(modelPromise);
    console.log(models);

    return (
        <div className="pb-20 mt-10">
            <div className="text-center space-y-5">
                <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
                <p className="">One subscription gives you access to all frontier AI models</p>        
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 container mx-auto">
                {
                    models.map((model) => (
                        <ModelCard key={model.id} model={model} carts = {carts} setCarts = {setCarts}/>
                ))}
            </div>
        </div>
    );
};

export default Models;