import Link from "next/link";
import React from "react";
import Objects from "./Objects";

const parentInfo = [
{
    carImage: "https://www.kia.com/content/dam/kia/us/en/vehicles/sorento-hev/2025/trims/ex-awd/exterior/61656a/360/36.png",
    carName: "Kia Sorento Hybrid EX",
    carPrice: "$33,996",
    carReviews: "4.5/5",
},
{
    carImage: "https://di-uploads-pod10.dealerinspire.com/chevycenter/uploads/2020/07/comp-2020-chevrolet-equinox-LT.png",
    carName: "Chevrolet Equinox LS",
    carPrice: "$27,899",
    carReviews: "4/5",
},
{
    carImage: "https://media.ed.edmunds-media.com/mini/hardtop-2-door/2023/oem/2023_mini_hardtop-2-door_2dr-hatchback_cooper-s_fq_oem_1_1600.jpg",
    carName: "Mini Hardtop S",
    carPrice: "$32,587",
    carReviews: "3.5/5",
},
{
    carImage: "https://media.motorfuse.com/img.cfm/type/3/img/0F16CD4A4D00DADEC1E6AFC5C0290D10F5CB41",
    carName: "Kia Forte LXS",
    carPrice: "$19,499",
    carReviews: "4.5/5",
},
];

const Parent: React.FC = () => {
    return (
        <div className="bg-gray-400 p-8 flex flex-col gap-10 justify-center">
        {parentInfo.map((car, index ) => (
        <Objects
        key={index}
        carImage={car.carImage}
        carName={car.carName}
        carPrice={car.carPrice}
        carReviews={car.carReviews}
        />
        ))}
    </div>
    )};

    export default Parent;