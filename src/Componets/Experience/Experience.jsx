import { experiences } from '../../Data'
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient relative overflow-hidden clip-path-custom-2"
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-800 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-indigo-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-fuchsia-800 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block relative">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-600 to-indigo-600 animate-pulse">
            EXPERIENCE
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-full"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Cards List */}
      <div className="relative z-10 flex flex-col items-center gap-20">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full sm:max-w-3xl p-6 sm:p-8 rounded-3xl border border-violet-700/30 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl shadow-[0_0_30px_5px_rgba(90,35,180,0.3)] relative overflow-hidden"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-700/5 via-fuchsia-700/5 to-indigo-700/5"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-6 mb-6">
                {/* Logo */}
                <div className="w-18 h-18 bg-white rounded-2xl overflow-hidden shadow-lg ring-2 ring-violet-500/30">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-300 font-medium">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="mt-2 inline-block bg-gradient-to-r from-violet-700/20 to-indigo-700/20 px-3 py-1 rounded-full border border-violet-600/30">
                    <p className="text-sm text-violet-300 font-medium">{experience.date}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {experience.desc}
              </p>

              {/* Skills */}
              <div>
                <h5 className="font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                  Skills & Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-violet-700 to-indigo-800 text-white px-4 py-2 text-xs sm:text-sm rounded-full border border-violet-600/40 font-medium shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative floating dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-700 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-fuchsia-700 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-700 rounded-full opacity-30 animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Experience;
