// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Ensure this file contains the animations defined previously
import DropdownButton from './DropdownButton'; // Import the dropdown component
// Import icons - FaFilePdf is already included
import { FaAndroid, FaDesktop, FaGlobe, FaGithub, FaFilePdf } from 'react-icons/fa';

const HeroSection = () => {
  // State for cycling through platforms in the sub-headline
  const platforms = ['Desktop', 'Android', 'Web'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  // State variables to control the staggered animation/appearance of elements
  const [showSubHeadline, setShowSubHeadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false); // State for architecture section

  // --- Cloudinary URLs ---
  const videoUrl = 'https://res.cloudinary.com/debashish/video/upload/f_auto,q_auto/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.mp4';
  const posterUrl = 'https://res.cloudinary.com/debashish/video/upload/f_jpg,q_auto,so_1/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.jpg';
  // --- End Cloudinary URLs ---

  // --- GitHub URL ---
  const githubOrgUrl = 'https://github.com/DDA1O1/drone_web';
  // --- End GitHub URL ---

  // --- Architecture PDF Links ---
  // !!! IMPORTANT: Replace these placeholders with your actual PDF URLs !!!
  const architectureOptions = [
    {
      label: 'Desktop Architecture',
      href: 'https://github.com/user-attachments/files/19825140/Drone.Desktop.-.Technical.Documentation.pdf', // <-- REPLACE THIS URL
      download: 'Desktop_Architecture.pdf' // Suggests filename for download
    },
    {
      label: 'Mobile Architecture',
      href: 'https://github.com/user-attachments/files/19825200/Drone.Control.App.-.Technical.Documentation.pdf', // <-- REPLACE THIS URL
      download: 'Mobile_Architecture.pdf' // Suggests filename for download
    },
    {
      label: 'Web Architecture',
      href: 'https://github.com/user-attachments/files/19825115/Tello.Drone.Control.System.-.Technical.Documentation.3.pdf', // <-- REPLACE THIS URL
      download: 'Web_Architecture.pdf' // Suggests filename for download
    },
  ];
  // --- End Architecture PDF Links ---


  // Effect to trigger the appearance of elements sequentially
  useEffect(() => {
    const subHeadlineTimer = setTimeout(() => setShowSubHeadline(true), 1500);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 2000);
    const videoTimer = setTimeout(() => setShowVideo(true), 2500);
    const architectureTimer = setTimeout(() => setShowArchitecture(true), 3000); // Timer for architecture section

    return () => {
      clearTimeout(subHeadlineTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(videoTimer);
      clearTimeout(architectureTimer); // Clear architecture timer
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

  // Define app download dropdown options
  const androidOptions = [
    { label: 'Download for ARM64 (64-bit)', href: 'https://github.com/DDA1O1/drone_mobile/releases/download/v1.0.7/app-arm64-v8a-release.apk', download: true },
    { label: 'Download for ARM (32-bit)', href: 'https://github.com/DDA1O1/drone_mobile/releases/download/v1.0.7/app-armeabi-v7a-release.apk', download: true },
    { label: 'View on GitHub', href: 'https://github.com/DDA1O1/drone_mobile', target: '_blank', rel: 'noopener noreferrer' },
  ];

  const desktopOptions = [
    { label: 'Download Windows (x64)', href: 'https://github.com/DDA1O1/drone_desktop/releases/download/v1.1.0/DroneDesktop-Setup-x64.exe', download: true },
    { label: 'Download Linux AMD64 (.deb)', href: 'https://github.com/DDA1O1/drone_desktop/releases/download/v1.1.0/drone-desktop_1.1.0_amd64-x64.deb', download: true },
    { label: 'Download Linux ARM64 (.deb)', href: 'https://github.com/DDA1O1/drone_desktop/releases/download/v1.1.0/drone-desktop_1.1.0_arm64-arm64.deb', download: true },
    { label: 'View on GitHub', href: 'https://github.com/DDA1O1/drone_desktop', target: '_blank', rel: 'noopener noreferrer' },
  ];

  return (
    // Main container
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 sm:pt-32 pb-16 md:pb-24">

      {/* Headline Section */}
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

      {/* Buttons Section */}
      <div className={`mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 transition-opacity duration-1000 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
        {/* Android Dropdown */}
        <DropdownButton
          label="Android App"
          options={androidOptions}
          icon={FaAndroid}
        />
        {/* Web App Link Button */}
        <a
          href="https://live.d1o1.fun/"
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
        {/* GitHub Customization Link */}
        <a
          href={githubOrgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
          title="Access source code for full customization and control"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
          Customize on GitHub
        </a>
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

      {/* --- MODIFIED: Technical Architecture Section --- */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showArchitecture ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}> {/* Added flex center */}
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Explore the Architecture</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6">
            Dive deeper into the design and technologies used across our mobile, desktop, and web platforms. Download the relevant PDF below.
         </p>
         {/* Using DropdownButton for Architecture PDFs */}
         <DropdownButton
            label="Architecture Details" // Changed label
            options={architectureOptions} // Passed the new options array
            icon={FaFilePdf} // Use the PDF icon
            // Applying teal color for consistency with previous single button, or choose another like emerald/gray
            // Note: DropdownButton internal style applies bg-emerald-600 by default.
            // If you want a different color, you'd need to pass a className or modify DropdownButton.
            // For now, let's rely on the default styling which is emerald. Add a comment if teal is preferred.
            // className="bg-teal-600 hover:bg-teal-700 focus-visible:ring-teal-500" // Example if modifying DropdownButton or passing className prop
         />
      </div>
      {/* --- END: Technical Architecture Section --- */}

    </div> // End of main container
  );
};

export default HeroSection;