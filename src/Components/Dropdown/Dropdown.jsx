import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative inline-block">
      <button
        className="transition"
        onMouseOver={handleMouseEnter}
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
      </button>
      {isOpen && (
        <ul
          className="absolute text-black z-10 bg-white rounded shadow w-[250px] mt-2 py-2 text-[15px] "
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/services/logo">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Logo Packages
            </li>
          </Link>
          <Link to="/services/web">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Website Packages
            </li>
          </Link>
          <Link to="/services/ecommerce">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              E-Commerce Packages
            </li>
          </Link>
          <Link to="/services/seo">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Seo Packages
            </li>
          </Link>
          <Link to="/services/smm">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              SMM Packages
            </li>
          </Link>
          <Link to="/services/video">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Video Packages
            </li>
          </Link>
          <Link to="/services/branding">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Branding Packages
            </li>
          </Link>
          <Link to="/services/hosting">
            <li
              className="hover:bg-[#097969] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Hosting Packages
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
