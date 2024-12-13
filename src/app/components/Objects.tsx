import { stringify } from "querystring";
import React from "react";

interface ObjectsProps {
            carImage: string;
            carName: string;
            carPrice: string;
            carReviews: string;
        }

const Objects: React.FC<ObjectsProps> = ({carImage, carName, carPrice, carReviews}) => {
    return(
        <div className="bg-white border rounded-lg shadow-ld p-4 max-w-xs">
            <img src={carImage} alt={carName} className="rounded w-full h-40 object-cover" />
            <h2 className="flex justify-center text-md font-bold mt-4">{carName}</h2>
            <p className="flex justify-center text-gray-900 mt-6">Price: {carPrice}</p>
            <p className="flex justify-center text-green-600 mt-2">Reviews: {carReviews}</p>
        </div>
    )
};

export default Objects;