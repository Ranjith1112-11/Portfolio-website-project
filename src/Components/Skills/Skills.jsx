import React from "react";

const Skills = () => {
  const frontendSkills = ["React", "Tailwindcss", "Figma", "HTML", "Bootstrap"];
  const backendSkills = ["Node.js", "MySQL", "Python", "MongoDB", "Express.js"];

  return (
    <div id="Skills" className="skills-section p-6 md:p-12 text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 mt-10">Skills</h2>
      <p className="text-md md:text-lg text-gray-300 mb-10">
        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Frontend Skills */}
        <div className="bg-black shadow-xl bg-opacity-30 p-8 rounded-lg shadow-lg max-w-2xl w-[450px] h-[250px]">
          <h3 className="text-xl font-semibold mb-6 text-left">Frontend</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {frontendSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 px-6 py-2 rounded-full text-sm font-medium text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-black shadow-xl bg-opacity-30 p-8 rounded-lg shadow-lg max-w-2xl w-[400px] h-[250px]">
          <h3 className="text-xl font-semibold mb-6 text-left">Backend</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {backendSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 px-6 py-2 rounded-full text-sm font-medium text-center"
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
