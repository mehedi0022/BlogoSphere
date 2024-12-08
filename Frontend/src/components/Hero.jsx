import React from "react";
import heroImage from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigrator = useNavigate();
  return (
    <div className="flex">
      {/* Left Side */}
      <div className="justify-center content-center">
        <p className="font-semibold">Hi, there!</p>
        <h2 className="text-4xl font-bold">
          <span className="text-red-300 ">BlogOSphere</span> is here to be your
          assistance
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta
          quod accusantium placeat, voluptatem dicta.
        </p>

        <button
          onClick={() => navigrator("/contact")}
          className="bg-primary px-6 py-3 text-white font-medium mt-3 rounded-full"
        >
          Contact Us
        </button>
      </div>

      {/* Right Side */}
      <div>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
