import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo2.jpg'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
   

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo image' style={{ width: '80px' }} />
        </div>

        {/* MENU */}
        <ul className='hidden md:flex'>
        <li>
    <Link 
      activeClass="active" 
      to="home"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Home
    </Link>
        </li>
            <li>
    <Link 
      activeClass="active" 
      to="about"  
      smooth={true} 
      offset={50} 
      duration={500}>
      About
    </Link>
            </li>
            <li>
    <Link 
      activeClass="active" 
      to="skills"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Skills
    </Link>
            </li> 
            <li>
    <Link 
      activeClass="active" 
      to="work"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Work
    </Link>
            </li>
            <li>
    <Link 
      activeClass="active" 
      to="contact"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Contact
    </Link>
            </li>
        </ul>
        
    

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick}
      activeClass="active" 
      to="home"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Home
    </Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick}
      activeClass="active" 
      to="about"  
      smooth={true} 
      offset={50} 
      duration={500}>
      About
    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}
      activeClass="active" 
      to="skills"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Skills
    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}
      activeClass="active" 
      to="work"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Work
    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}
      activeClass="active" 
      to="contact"  
      smooth={true} 
      offset={50} 
      duration={500}>
      Contact
    </Link></li>
        </ul>

        {/* socail icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between item-center w-full text-gray-300' 
                    href='https://www.linkedin.com/in/malvin-denga-4383632a2/' target="_blank">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between item-center w-full text-gray-300' 
                    href='https://github.com/malvindng' target="_blank">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a8a4a4]'>
                    <a className='flex justify-between item-center w-full text-gray-300' 
                    href='mailto:dengamalvin5@gmail.com'>
                        Email <IoIosMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a02e2ef6]'>
                    <a className='flex justify-between item-center w-full text-gray-300' 
                    href='resume.pdf download="downloaded-file.pdf"'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
