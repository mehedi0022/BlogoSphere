import React from "react";
import { FaAward, FaSuitcaseRolling } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const AboutMe = () => {
  return (
    <div>
      <p className="text-center text-blue-950">Intro</p>
      <h2 className="text-center font-bold text-[3rem]">About me</h2>
      <div className="flex col gap-10 mt-3 items-center">
        <div>
          <img
            className="max-w-[450px]"
            src="https://habibthedeveloper.com/assets/img/mehedi%20Hassan.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="font-bold text-[1.5rem]">
            Hi, I am Mehedi Hassan, Based in Bangladesh!
          </h2>
          <p className="max-w-[520px]">
            Web Developer, with extensive knowledge and 2 yeasr of experience,
            Working in web technologies and I also expert in WordPress,
            Delevering Quality Work.
          </p>

          <div className="flex col mt-3 gap-4">
            <div className="text-center px-8 py-3 bg-teal-400 shadow-md rounded-md">
              <i className="text-2xl text-white inline-flex">{<FaAward />}</i>
              <h3 className="font-medium text-white text-lg">Experiences</h3>
              <p>2 + Years</p>
            </div>

            <div className="text-center px-8 py-3  bg-teal-400 shadow-md rounded-md">
              <i className="text-2xl text-white inline-flex">
                {<FaSuitcaseRolling />}
              </i>
              <h3 className="font-medium text-white text-lg">Complited</h3>
              <p>60 + Projects</p>
            </div>

            <div className="text-center px-8 py-3  bg-teal-400 shadow-md rounded-md">
              <i className="text-2xl text-white inline-flex">{<BiSupport />}</i>
              <h3 className="font-medium text-white text-lg">Support</h3>
              <p>Online 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
