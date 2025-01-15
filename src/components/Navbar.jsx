import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 bg-white/1 backdrop-blur-lg ">
      <div className="flex items-center lg:justify-center justify-between h-16 px-2 sm:px-2 lg:px-8 lg:gap-72">
        {/* Logo */}
        <NavLink to="/" className="w-20 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 items-center justify-center flex font-bold shadow-md">
          <p>3D Tour</p>
        </NavLink>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className={`hamburger ${isOpen ? 'toggle' : ''}`}>
              <div className="line1 bg-white h-1 w-8 mb-2 transition-all"></div>
              <div className="line2 bg-white h-1 w-8 mb-2 transition-all"></div>
              <div className="line3 bg-white h-1 w-8 transition-all"></div>
            </div>
          </button>
        </div>

        {/* Links */}
        <nav className="md:flex items-center text-lg gap-20 font-medium hidden">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : 'text-orange-500'}>
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-red-500' : 'text-orange-500'}>
            Blog
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-red-500' : 'text-orange-500'}>
          Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : 'text-orange-500'}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white/1 backdrop-blur-lg text-white space-y-6 mt-4 pb-6">
          <li>
            <NavLink to="/" onClick={toggleMenu} className="hover:text-orange-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={toggleMenu} className="hover:text-orange-500">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={toggleMenu} className="hover:text-orange-500">
            Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu} className="hover:text-orange-500">
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
