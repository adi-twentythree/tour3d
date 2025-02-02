import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 bg-white/1 backdrop-blur-lg">
      <div className="flex items-center lg:justify-center justify-between h-16 px-2 sm:px-2 lg:px-8 lg:gap-96">
        {/* Logo */}
        <NavLink
          to="/"
          className="w-20 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 items-center justify-center flex font-bold shadow-md"
        >
          <p>3D Tour</p>
        </NavLink>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div
              className={`hamburger ${isOpen ? 'rotate-45' : ''} transition-all ease-in-out duration-300`}
            >
              <div
                className={`line1 bg-black h-1 w-8 mb-2 transition-all ${isOpen ? 'rotate-45' : ''}`}
              ></div>
              <div
                className={`line2 bg-black h-1 w-8 mb-2 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              ></div>
              <div
                className={`line3 bg-black h-1 w-8 transition-all ${isOpen ? '-rotate-45' : ''}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Links */}
        <div className="md:flex items-center text-lg gap-20 font-medium hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-orange-500')}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-orange-500')}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-orange-500')}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col items-center bg-white/1 backdrop-blur-lg text-black space-y-14 mt-8 pb-6 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <li>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="pb-6">
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
