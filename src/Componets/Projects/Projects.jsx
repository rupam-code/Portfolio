import React, { useState } from "react";
import { projects } from "../../Data";

function Projects() {
  const [selected, setSelect] = useState(null);
  const handleOpenModal = (project) => {
    setSelect(project);
  };
  const handleCloseModal = () => {
    setSelect(null);
  };
  return (
    <section
      id="project"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden  "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Section Title */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block relative">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative">
            PROJECTS
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg opacity-20 blur-lg animate-pulse"></div>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
        </div>
        <p className="text-gray-400 mt-6 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Enhanced Project Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-white/20 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-400/50 hover:-translate-y-3 transition-all duration-500 hover:border-purple-400/50 relative"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Image container with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* View project indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                  View Project
                </div>
              </div>
            </div>
            
            {/* Enhanced content */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 mr-2 mb-2 border border-purple-500/30 hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compact Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl w-[90%] max-w-lg overflow-hidden relative border border-white/20 animate-in zoom-in duration-300">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl font-bold hover:text-purple-400 transition-colors duration-300 hover:rotate-90 transform transition-transform"
              >
                &times;
              </button>
            </div>
            
            {/* Compact content */}
            <div className="px-6 pb-6 -mt-2">
              {/* Image */}
              <div className="w-full flex justify-center mb-4">
                <div className="relative group">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg border border-white/10"
                  />
                  {/* Image glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {selected.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {selected.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-3">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 border border-white/10 hover:border-purple-500/50 text-sm"
                  >
                    <svg
                      className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {selected.webapp && (
                  <a
                    href={selected.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 border border-purple-500/50 hover:border-purple-400 text-sm"
                  >
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;