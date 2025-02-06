import React from "react";

const Skills = () => {
  const frontendSkills = ["React", "Tailwind CSS", "Figma", "HTML", "Bootstrap"];
  const backendSkills = ["Node.js", "MySQL", "Python", "MongoDB", "Express.js"];

  return (
    <div id="Skills" className="skills-section p-6 md:p-12 text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 mt-10">Skills</h2>
      <p className="text-md md:text-lg text-gray-300 mb-10">
        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Frontend Skills */}
        <div className="bg-black bg-opacity-30 p-6 rounded-lg w-full md:w-[400px]">
          <h3 className="text-xl font-semibold mb-6 text-left">Frontend</h3>
          <div className="grid grid-cols-3 gap-2">
            {frontendSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-200 text-center truncate"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-black bg-opacity-30 p-6 rounded-lg w-full md:w-[400px]">
          <h3 className="text-xl font-semibold mb-6 text-left">Backend</h3>
          <div className="grid grid-cols-3 gap-2">
            {backendSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-200 text-center truncate"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;