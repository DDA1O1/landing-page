// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Ensure this file contains the animations defined previously
import DropdownButton from './DropdownButton'; // Import the dropdown component
// Import icons
import { FaAndroid, FaDesktop, FaGlobe } from 'react-icons/fa';

const HeroSection = () => {
  // State for cycling through platforms in the sub-headline
  const platforms = ['Desktop', 'Android', 'Web'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  // State variables to control the staggered animation/appearance of elements
  const [showSubHeadline, setShowSubHeadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // State for video section fade-in

  // --- Cloudinary URLs ---
  const videoUrl = 'https://res.cloudinary.com/debashish/video/upload/f_auto,q_auto/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.mp4';
  const posterUrl = 'https://res.cloudinary.com/debashish/video/upload/f_jpg,q_auto,so_1/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.jpg';
  // --- End Cloudinary URLs ---

  // Effect to trigger the appearance of elements sequentially
  useEffect(() => {
    const subHeadlineTimer = setTimeout(() => setShowSubHeadline(true), 1500);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 2000);
    const videoTimer = setTimeout(() => setShowVideo(true), 2500);

    return () => {
      clearTimeout(subHeadlineTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  // Effect for cycling the platform names in the sub-headline
  useEffect(() => {
    let intervalId;
    if (showSubHeadline) {
      intervalId = setInterval(() => {
        setCurrentPlatformIndex(prevIndex => (prevIndex + 1) % platforms.length);
      }, 2500);
    }
    return () => clearInterval(intervalId);
  }, [showSubHeadline, platforms.length]);

  // Define dropdown options (replace placeholders with actual links)
  const androidOptions = [
    { label: 'Download APK (v1.2)', href: '#', download: true }, // Replace #
    { label: 'Download APK (v1.1)', href: '#', download: true }, // Replace #
    { label: 'View on GitHub', href: '#', target: '_blank', rel: 'noopener noreferrer' }, // Replace #
  ];

  const desktopOptions = [
    { label: 'Download Windows (x64)', href: '#', download: true }, // Replace #
    { label: 'Download macOS (Intel)', href: '#', download: true }, // Replace #
    { label: 'Download macOS (Apple Silicon)', href: '#', download: true }, // Replace #
    { label: 'Download Linux (.deb)', href: '#', download: true }, // Replace #
    { label: 'View on GitHub', href: '#', target: '_blank', rel: 'noopener noreferrer' }, // Replace #
  ];

  return (
    // Main container: REMOVED negative margin, ADDED top padding (pt-24 / sm:pt-32)
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 sm:pt-32 pb-16 md:pb-24">
      {/*
         - Removed `-mt-16 sm:-mt-20` which was likely pulling content off-screen.
         - Added `pt-24 sm:pt-32` (adjust values as needed) to create space from the top edge.
         - Kept `justify-center` which will center content within the remaining vertical space.
         - Kept `min-h-screen` to ensure it tries to fill the screen height.
      */}

      {/* Headline Section - Responsive sizing */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
        <span className="animate-fade-slide-in opacity-0 inline-block" style={{ animationDelay: '0.2s' }}>
          Command
        </span>{' '}
        <span className="animate-fade-slide-in opacity-0 inline-block" style={{ animationDelay: '0.5s' }}>
          Your
        </span>{' '}
        <span className="animate-fade-slide-in opacity-0 inline-block" style={{ animationDelay: '0.8s' }}>
          Tello.
        </span>
      </h1>

      {/* Sub-headline Section */}
      <p className={`text-xl md:text-2xl text-gray-600 transition-opacity duration-1000 ${showSubHeadline ? 'opacity-100' : 'opacity-0'}`}>
        Seamlessly. From{' '}
        <span
          key={currentPlatformIndex}
          className="font-semibold text-emerald-600 inline-block w-[110px] text-left animate-fade-in-fast"
        >
          {platforms[currentPlatformIndex]}
        </span>
        .
      </p>

      {/* Download Buttons Section */}
      <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-opacity duration-1000 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
        {/* Android Dropdown */}
        <DropdownButton
          label="Android App"
          options={androidOptions}
          icon={FaAndroid}
        />

        {/* Web App Link Button */}
        <a
          href="#" // Replace with your actual web app URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          <FaGlobe className="h-5 w-5" aria-hidden="true" />
          Launch Web App
        </a>

        {/* Desktop Dropdown */}
        <DropdownButton
          label="Desktop App"
          options={desktopOptions}
          icon={FaDesktop}
        />
      </div>

      {/* Video Player Section */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">See it in Action</h2>
        <div className="aspect-video overflow-hidden rounded-lg shadow-xl bg-gray-900">
          <video
            key={videoUrl}
            className="w-full h-full object-cover"
            src={videoUrl}
            poster={posterUrl}
            controls
            preload="metadata"
            playsInline
          >
            Sorry, your browser doesn't support embedded videos.
            You can <a href={videoUrl} download className="text-emerald-500 hover:underline">download the video</a> instead.
          </video>
        </div>
      </div>

    </div> // End of main container
  );
};

export default HeroSection;