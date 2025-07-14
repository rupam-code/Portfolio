import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  //Scrolling
  const handleScroll = (secId) =>{
    const section = document.getElementById(secId);
    if(section) {
      section.scrollIntoView({behavior:"smooth"});
    }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
      <h2 className='text-xl font-semibold text-purple-500'>
        Rupam Das
      </h2>
      <nav className=' flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
      {[
        {name:"About",id:"about"},
        {name:"Skills",id:"skills"},
        {name:"Experience",id:"experience"},
        {name:"Projects",id:"project"},
        {name:"Education",id:"education"},
      ].map((item,index)=>(
        <button key={index} onClick={()=>handleScroll(item.id)}
        className='hover:text-purple-500 text-sm sm:text-base my-1'
        >
          {item.name}
        </button>
      ))}
  </nav>
      <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {
          [
            {icon:<FaFacebook/>,link:"https://www.facebook.com/akash.rupam.35"},
             {icon:<FaTwitter/>,link:""},
              {icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/rupamcode/"},
               {icon:<FaInstagram/>,link:"https://www.instagram.com/itz_rupam_das_/"}
      
          ].map((item,index)=>(
            <a key={index} href={item.link}
            target='blank'
            rel='nooper noreferrer'
            className='text-xl hover-text-purple-500 transition-transform transform hover:scale-150'>{item.icon}</a>
          ))
        }
      </div>

      <p className='text-sm text-gray-500 mt-6'>
        @ 2025 Rupam Das . All rights reserved.
      </p>
      
      </div>

    </footer>
  )
}

export default Footer