import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
            }}
            className="flex justify-center items-center mx-[-48px]"
        >
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 mx-20 ">
                <h3 className="text-xl text-primary font-bold my-5">
                    Appoinment
                </h3>
                <h2 className="text-3xl text-white my-5">
                    Make an appoinment today
                </h2>
                <p className="text-white my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit, nesciunt repudiandae. Ut ipsum libero iure dolor
                    tenetur officia non laborum sed, aperiam laudantium quis,
                    quibusdam rerum quo dolore autem vitae voluptatem atque
                    accusamus vero error numquam beatae. Accusantium, dolorem
                    illum.
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
