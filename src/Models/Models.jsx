import { use } from "react";


const Models = ({modelPromise}) => {

    const models = use(modelPromise);
    console.log(models);

    return (
        <div className="pb-20">
            <div className="text-center space-y-5">
                <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
                <p className="">One subscription gives you access to all frontier AI models</p>        
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 container mx-auto">
                {
                    models.map(model => <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300" >
                        <div className="flex justify-center items-center h-56 bg-zinc-200">
                            <img src={model.image} alt="" className="h-40 w-40 object-contain"/>
                        </div>

                        <div className="p-4 space-y-5">
                            <h3 className="text-2xl font-bold">{model.title}</h3>
                            <p>{model.description}</p>
                            <p className="text-2xl font-bold">${model.price}/month</p>
                            <button className="btn w-full bg-red-300">Subscribe Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Models;