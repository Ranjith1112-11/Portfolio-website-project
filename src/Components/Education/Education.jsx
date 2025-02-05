import React from 'react';

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology (BTech IT)",
    institution: "Sri Krishna College of Engineering and Technology",
    year: "2020 - 2023",
    icon: "🎓",
  },
  {
    degree: "Diploma in Computer Networking",
    institution: "PSG Polytechnic College",
    year: "2017 - 2020",
    icon: "🎓",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "SRV.MATRIC.HR.SEC",
    year: "2017",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Full-Stack Developer (Intern)",
    company: "Virtusa",
    year: "May 2023 - Aug 2023",
    description: "Developed the NetFi Portal with ReactJS for dynamic UI, enabling seamless plan selection, recharges, and profile management. Implemented admin functionalities using Springboot for CRUD operations. Built optimized RESTful APIs for managing prepaid/postpaid plans and user transactions.",
    icon: "💼",
  },
];

const Education = () => {
  return (
    <section id='Education' className="skills-section p-6 md:p-12 text-white text-center">
      {/* Main heading without container */}
      <h2 className="text-2xl md:text-4xl font-bold mb-12 mt-10">Education & Experience</h2> {/* Added mb-12 for spacing */}

      <div className='max-w-4xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education section */}
          <div>
            <h3 className='text-2xl font-semibold text-gray-300 mb-6'>Education</h3>
            {educationData.map((edu, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                <div className='text-left'>
                  <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                  <p className='text-gray-300'>{edu.institution}</p>
                  <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className='text-2xl font-semibold text-gray-300 mb-6'>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div className='text-left'>
                  <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                  <p className='text-gray-300'>{exp.company}</p>
                  <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                  <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
