import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";

const Home = () => {
  const text = "Hi, I'm Ranjith Kumar";
  const resumeLink = "https://drive.google.com/file/d/1Hr5eSGGRN7TOc6EdCnbJmmmDSxvkxc7-/view?usp=drivesdk";

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {text}
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-6">
          I’m a passionate developer who loves building modern web applications.
          My focus is on creating seamless and user-friendly experiences.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>

          {/* View Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 font-semibold rounded-3xl border-2 border-white text-center"
          >
            View Resume
          </a>
        </div>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
