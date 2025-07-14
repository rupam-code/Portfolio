import React from 'react'
import { SkillsInfo } from '../../Data'
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id='skills'
      className='pt-24 pb-24 px-6 sm:px-12 md:px-[7vw] lg:px-[15vw] font-sans relative min-h-screen overflow-hidden clip-path-custom'
      style={{
        background: `
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%),
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `
      }}
    >
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fuchsia-700 to-blue-500 bg-clip-text text-transparent'>
          Skills
        </h2>
        <div className='w-24 h-1 bg-[#0d051c] mx-auto mt-2'></div>
        <p className='text-gray-300 my-4 text-lg font-semibold'>
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 lg:col-auto sm:grid-cols-2 gap-6 py-10'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-gray-900/80 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgb(130,69,236,0.3)]'
          >
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-2'
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className='w-6 h-6 sm:w-8 sm:h-8'
                    />
                    <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
