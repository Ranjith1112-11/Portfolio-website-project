import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold w-full text-center mb-8">About</h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            className="w-full max-w-xs md:h-80 object-contain"
            src={AboutImg}
            alt="About img"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 px-4">
          <ul>
            <div className="flex items-start gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Developed a responsive website using React, ensuring cross-browser compatibility and mobile responsiveness.
                </p>
              </span>
            </div>

            <div className="flex items-start gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold">Database Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Developed and maintained database schemas, stored procedures, and optimized queries to ensure efficient data retrieval and storage.
                </p>
              </span>
            </div>

            <div className="flex items-start gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Developed and maintained server-side logic, APIs, and database integration to support web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
