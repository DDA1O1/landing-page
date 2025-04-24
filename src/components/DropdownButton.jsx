// src/components/DropdownButton.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Example icon

const DropdownButton = ({ label, options, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the entire dropdown container
  const buttonRef = useRef(null); // Ref specifically for the button

  // Toggle Dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Only re-run effect if isOpen changes

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
          {label}
          <FaChevronDown className={`-mr-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>

      {/* Dropdown menu, show/hide based on state */}
      <div
        className={`absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {/* Map through the options to create menu items */}
          {options.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              role="menuitem"
              // Optional: Close dropdown on item click
              onClick={() => setIsOpen(false)}
              // Important for security if links are external/dynamic
              target={option.target || '_blank'}
              rel={option.rel || 'noopener noreferrer'}
              // Add download attribute if it's a direct file link
              download={option.download}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;