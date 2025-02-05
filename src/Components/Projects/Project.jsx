import React from "react";
import employeeMSImage from "../../assets/Dashboard.jpeg";
import bookMSImage from "../../assets/netfi.jpeg";

const projects = [
  {
    id: 1,
    name: "Web application for sports module",
    technologies: "MERN Stack",
    languages: ["React", "Node.js", "MongoDB", "Express"],
    image: employeeMSImage,
    github: "https://github.com/Ranjith1112-11/Web-application-for-Sports-Module",
  },
  {
    id: 2,
    name: "Netfi Portal App",
    technologies: "Java-Full stack",
    languages: ["Java", "Spring Boot", "MySQL", ],
    image: bookMSImage,
    github: "https://github.com/Ranjith1112-11/virtusa-project",
  },
  {
    id: 3,
    name: "Malicious Query Attack Detection using ANN",
    technologies: "Deep Learning ",
    languages: ["Python", "BeautifulSoup", "PHP", "SQL"],
    image: employeeMSImage,
    github: "https://github.com/Ranjith1112-11/malicious-query-detection",
  },
];

const Project = () => {
  return (
    <section className="text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 p-5 rounded-lg shadow-md flex flex-col h-full"
            >
              {/* Image container with fixed height */}
              <div className="h-40 mb-3">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Content area */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-1 line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{project.technologies}</p>
                
                {/* Language tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((language, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-800 rounded-full px-2 py-1 text-xs font-medium text-gray-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* GitHub link pushed to bottom */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm mt-auto"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;