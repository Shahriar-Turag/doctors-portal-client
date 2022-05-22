import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            <InfoCard
                cardTitle="Opening Hours"
                cardDescription="Lorem Ipsum is simply dummy text of the pri"
                bgClass="bg-gradient-to-r from-secondary to-primary"
                img={clock}
            />
            <InfoCard
                cardTitle="Our Locations"
                cardDescription="Brooklyn, NY 10036, United States"
                bgClass="bg-neutral"
                img={marker}
            />
            <InfoCard
                cardTitle="Contact Us"
                cardDescription="+000 123 456789"
                bgClass="bg-gradient-to-r from-secondary to-primary"
                img={phone}
            />
        </div>
    );
};

export default Info;
