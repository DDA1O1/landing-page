// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import DropdownButton from './DropdownButton';
// Added FaCode for the new section button
import { FaAndroid, FaDesktop, FaGlobe, FaGithub, FaFilePdf, FaBook, FaCode } from 'react-icons/fa';

const HeroSection = () => {
  // State for cycling through platforms in the sub-headline
  const platforms = ['Desktop', 'Android', 'Web'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  // State variables to control the staggered animation/appearance of elements
  const [showSubHeadline, setShowSubHeadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDocsSection, setShowDocsSection] = useState(false);
  // --- NEW: State for the object detection section ---
  const [showObjectDetection, setShowObjectDetection] = useState(false);
  // --- END NEW ---

  // --- Cloudinary URLs ---
  const videoUrl = 'https://res.cloudinary.com/debashish/video/upload/f_auto,q_auto/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.mp4';
  const posterUrl = 'https://res.cloudinary.com/debashish/video/upload/f_jpg,q_auto,so_1/v1745503372/ScreenRec_2025-04-24_12-55-06_-_MERGE_-_Videobolt.net_-_MERGE_mgrlch.jpg';
  // --- End Cloudinary URLs ---

  // --- GitHub URLs ---
  const githubOrgUrl = 'https://github.com/DDA1O1/drone_web';
  const objectDetectionRepoUrl = 'https://github.com/DDA1O1/tello_python';
 

  // --- Architecture PDF Links ---
  const architectureOptions = [
    {
      label: 'Desktop Architecture',
      href: 'https://github.com/user-attachments/files/19825140/Drone.Desktop.-.Technical.Documentation.pdf',
      download: 'Desktop_Architecture.pdf'
    },
    {
      label: 'Mobile Architecture',
      href: 'https://github.com/user-attachments/files/19825200/Drone.Control.App.-.Technical.Documentation.pdf',
      download: 'Mobile_Architecture.pdf'
    },
    {
      label: 'Web Architecture',
      href: 'https://github.com/user-attachments/files/19825115/Tello.Drone.Control.System.-.Technical.Documentation.3.pdf',
      download: 'Web_Architecture.pdf'
    },
  ];
  // --- End Architecture PDF Links ---

  // --- Personal Documentation Site URL ---
  const personalDocsUrl = 'https://docs.d1o1.fun/';
  // --- End Personal Documentation Site URL ---


  // Effect to trigger the appearance of elements sequentially
  useEffect(() => {
    const subHeadlineTimer = setTimeout(() => setShowSubHeadline(true), 1500);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 2000);
    const videoTimer = setTimeout(() => setShowVideo(true), 2500);
    const architectureTimer = setTimeout(() => setShowArchitecture(true), 3000);
    const docsTimer = setTimeout(() => setShowDocsSection(true), 3500);
    const objectDetectionTimer = setTimeout(() => setShowObjectDetection(true), 2500);

    return () => {
      clearTimeout(subHeadlineTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(videoTimer);
      clearTimeout(architectureTimer);
      clearTimeout(docsTimer);
      clearTimeout(objectDetectionTimer);
      
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

      {/* --- NEW: Object Detection Section --- */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showObjectDetection ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Run Object Detection Locally</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6">
            Interested in leveraging the drone's video feed for object detection? Access the repository below to set up and run the detection model on your own machine.
         </p>
         <a
           href={objectDetectionRepoUrl} // Use the variable defined above
           target="_blank"
           rel="noopener noreferrer"
           // Example using purple, adjust colors as needed
           className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
           title="Go to the Object Detection GitHub repository" // Tooltip for the link
         >
           <FaCode className="h-5 w-5" aria-hidden="true" /> {/* Code icon */}
           Get Local Detection Code
         </a>
      </div>
      {/* --- END: Object Detection Section --- */}

      {/* Technical Architecture Section */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showArchitecture ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Explore the Architecture</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6">
            Dive deeper into the design and technologies used across our mobile, desktop, and web platforms. Download the relevant PDF below.
         </p>
         <DropdownButton
            label="Architecture Details"
            options={architectureOptions}
            icon={FaFilePdf}
         />
      </div>

      {/* Personal Documentation Section */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showDocsSection ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">My Learning & Documentation</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6">
            Beyond this project, I actively document my learnings and explorations in technology. Visit my personal documentation site to see more.
         </p>
         <a
           href={personalDocsUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
           title="Visit my personal documentation site"
         >
           <FaBook className="h-5 w-5" aria-hidden="true" />
           Explore My Docs
         </a>
      </div>

    </div> // End of main container
  );
};

export default HeroSection;