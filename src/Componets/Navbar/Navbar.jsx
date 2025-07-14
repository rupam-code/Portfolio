import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

     
      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-semibold text-white cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Rupam</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Das</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-200 ${activeSection === item.id ? 'text-[#8245ec]' : ''
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media (Desktop) */}
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/rupam-code" target='_blank' rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rupamcode/" target='_blank' rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
            )
          }
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-[#050414] bg-opacity-90 backdrop-blur-lg shadow-md px-6 py-4'>
          <ul className='flex flex-col space-y-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left text-lg hover:text-[#8245ec] transition-colors duration-200 ${activeSection === item.id ? 'text-[#8245ec]' : ''
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className='flex space-x-4 mt-4'>
            <a href="https://github.com/rupam-code" target='_blank' rel='noopener noreferrer'
              className='text-gray-300 hover:text-[#8245ec]'>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rupamcode/" target='_blank' rel='noopener noreferrer'
              className='text-gray-300 hover:text-[#8245ec]'>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
