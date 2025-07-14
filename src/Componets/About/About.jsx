import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../../assets/Profile3.jpg';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans'
    >
      {/* Main container with better spacing */}
      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

          {/* Left side - Text content */}
          <div className='order-2 lg:order-1 text-center lg:text-left space-y-6'>
            {/* Greeting */}
            <div className='space-y-2'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 leading-tight'>
                Hello, I'm
              </h1>

              <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight'>
                Rupam Das
              </h2>
            </div>

            {/* Typewriter section */}
            <div className='space-y-4'>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight'>
                <span className='text-gray-300'>I am a </span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] via-[#FFD700] to-[#8245ec]'>
                  <Typewriter
                    words={['FullStack Developer', 'Java Developer', 'Coder', 'Problem Solver']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h3>
            </div>

            {/* About paragraph */}
            <div className='max-w-xl lg:max-w-none'>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                I am a recent BCA  graduate and a passionate Java Developer, eager to build reliable and efficient applications. With a strong foundation in object-oriented programming and backend development, I am flexible and quick to adapt to new technologies, always aiming to grow and deliver meaningful solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center pt-4'>
              <a
                href="https://drive.google.com/file/d/1OYOBpkcOIRjahz9Pie8_cNQRwDGD8gno/view?usp=drive_open"
                target="_blank"
                rel="noopener noreferrer"
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                style={{
                  background: 'linear-gradient(90deg , #8245ec, #a8355f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
              >
                <span className='relative z-10'>Download CV</span>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a8355f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
              </a>

              <a
                href="#contact"
                className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-[#8245ec] rounded-full transition-all duration-300 hover:bg-[#8245ec] hover:shadow-lg'
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
            <div className='relative'>
              {/* Animated background gradient */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec] via-[#FFD700] to-[#8245ec] animate-pulse opacity-75 blur-sm'></div>

              <Tilt
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1200}
                scale={1.05}
                transitionSpeed={1500}
                transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                gyroscope={true}
              >
                <div className="w-full h-full rounded-full p-1 bg-gradient-to-tr from-[#8245ec] via-[#FFD700] to-[#8245ec] shadow-2xl">
                  <div className="w-full h-full rounded-full p-1 bg-black">
                    <img
                      src={profilePic}
                      alt="Rupam Das - Full Stack Developer"
                      className="w-full h-full rounded-full object-cover object-center filter brightness-110 contrast-110"
                    />
                  </div>
                </div>
              </Tilt>

              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-[#FFD700] rounded-full animate-bounce opacity-80'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-[#8245ec] rounded-full animate-bounce opacity-80' style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='flex justify-center mt-16 lg:mt-20'>
          <div className='animate-bounce'>
            <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;