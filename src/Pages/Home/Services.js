import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description:
                "Fluoride is a safe, non-toxic, and non-invasive treatment for tooth decay. It is used to treat and prevent tooth decay. It is also used to treat and prevent tooth decay.",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description:
                "Cavity filling is a safe, non-toxic, and non-invasive treatment for tooth decay. It is used to treat and prevent tooth decay. It is also used to treat and prevent tooth decay.",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description:
                "Teeth whitening is a safe, non-toxic, and non-invasive treatment for tooth decay. It is used to treat and prevent tooth decay. It is also used to treat and prevent tooth decay.",
            img: whitening,
        },
    ];

    return (
        <div className="my-28">
            <div className="text-center">
                <h3 className="uppercase text-primary text-xl font-bold">
                    Our services
                </h3>
                <h2 className="text-3xl">Services we provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
