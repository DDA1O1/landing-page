// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import DropdownButton from './DropdownButton';
import { FaAndroid, FaDesktop, FaGlobe, FaGithub, FaFilePdf, FaBook, FaCode, FaDocker } from 'react-icons/fa';

const HeroSection = () => {
  // State for cycling through platforms in the sub-headline
  const platforms = ['Desktop', 'Android', 'Web'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  // State variables to control the staggered animation/appearance of elements
  const [showSubHeadline, setShowSubHeadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showDockerSection, setShowDockerSection] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDocsSection, setShowDocsSection] = useState(false);
  const [showObjectDetection, setShowObjectDetection] = useState(false);


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
    const dockerTimer = setTimeout(() => setShowDockerSection(true), 2250); 
    const videoTimer = setTimeout(() => setShowVideo(true), 2500);
    const architectureTimer = setTimeout(() => setShowArchitecture(true), 3000);
    const docsTimer = setTimeout(() => setShowDocsSection(true), 3500);
    const objectDetectionTimer = setTimeout(() => setShowObjectDetection(true), 2500); 

    return () => {
      clearTimeout(subHeadlineTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(dockerTimer);
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

  // Helper component for code blocks to avoid repetition (Optional but good practice)
  const CodeBlock = ({ children }) => (
    <pre className="bg-gray-800 text-gray-200 p-3 mt-1 rounded-md text-sm overflow-x-auto whitespace-pre-wrap break-words font-mono">
        <code>{children}</code>
    </pre>
  );

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
        <DropdownButton label="Android App" options={androidOptions} icon={FaAndroid} />
        <a href="https://live.d1o1.fun/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
          <FaGlobe className="h-5 w-5" aria-hidden="true" /> Launch Web App
        </a>
        <DropdownButton label="Desktop App" options={desktopOptions} icon={FaDesktop} />
        <a href={githubOrgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2" title="Access source code for full customization and control">
          <FaGithub className="h-5 w-5" aria-hidden="true" /> Customize on GitHub
        </a>
      </div>

      {/* --- Docker Quick Start Section (Improved Formatting) --- */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showDockerSection ? 'opacity-100' : 'opacity-0'} flex flex-col items-start text-left`}> {/* Changed to items-start and text-left */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 flex items-center gap-2 w-full justify-center sm:justify-start"> {/* Center on small, start on larger */}
          <FaDocker className="text-blue-500" /> Run via Docker (Easiest Desktop Setup)
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 px-2 sm:px-0 w-full text-center sm:text-left"> {/* Center on small, start on larger */}
            Get the web/desktop interface running quickly using Docker:
        </p>
        <div className="w-full space-y-6 px-2 sm:px-0"> {/* Increased space-y */}

            {/* Step 1: Pull Image */}
            <div>
                <p className="font-medium text-gray-700">1. Pull the Docker Image:</p>
                <CodeBlock>{`docker pull debashish525/tello-drone-control:latest`}</CodeBlock>
            </div>

            {/* Step 2: Create Media Directory */}
            <div>
                <p className="font-medium text-gray-700">2. Create a Local Folder (for Media Storage):</p>
                <p className="text-sm text-gray-500 mt-1 mb-2">This folder on your computer will store photos/videos. Choose <span className="font-semibold">one</span> command for your system:</p>
                <CodeBlock>
                    {/* Using template literals for multi-line string */}
{`# On Linux/macOS:
mkdir ~/my_tello_media

# On Windows (Using Command Prompt):
mkdir %USERPROFILE%\\my_tello_media

# On Windows (Using PowerShell):
mkdir $env:USERPROFILE\\my_tello_media`}
                </CodeBlock>
            </div>

            {/* Step 3: Run Container */}
            <div>
                <p className="font-medium text-gray-700">3. Run the Container:</p>
                 <p className="text-sm text-gray-500 mt-1 mb-2">
                   Replace <code className="bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded font-semibold">/path/to/your/host/media</code> with the actual path to the folder you created in Step 2 (e.g., <code className="bg-gray-200 text-gray-700 px-1 rounded">~/my_tello_media</code> or <code className="bg-gray-200 text-gray-700 px-1 rounded">%USERPROFILE%\\my_tello_media</code>).
                 </p>
                <CodeBlock>
                    {/* Using template literals and explicit line breaks for clarity */}
{`docker run -d \\
  --name tello-app \\
  -p 3000:3000 \\
  -p 3001:3001 \\
  -p 11111:11111/udp \\
  -v "`}<span className="text-yellow-300 font-bold">{`/path/to/your/host/media`}</span>{`":/app/uploads \\
  debashish525/tello-drone-control:latest`}
                </CodeBlock>
                 <p className="text-sm text-gray-500 mt-2">
                   After running, access the application in your browser at <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">http://localhost:3000</a>.
                 </p>
            </div>
        </div>
      </div>
      {/* --- END: Docker Quick Start Section --- */}


      {/* Video Player Section */}
      <div className={`mt-16 md:mt-20 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}> {/* Added flex/items-center */}
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">See it in Action</h2>
        <div className="aspect-video overflow-hidden rounded-lg shadow-xl bg-gray-900 w-full"> {/* Ensure video container takes width */}
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

      {/* Object Detection Section */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showObjectDetection ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Run Object Detection Locally</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6 text-center"> {/* Added text-center */}
            Interested in leveraging the drone's video feed for object detection? Access the repository below to set up and run the detection model on your own machine.
         </p>
         <a
           href={objectDetectionRepoUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex w-full sm:w-auto justify-center items-center gap-x-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
           title="Go to the Object Detection GitHub repository"
         >
           <FaCode className="h-5 w-5" aria-hidden="true" />
           Get Local Detection Code
         </a>
      </div>

      {/* Technical Architecture Section */}
      <div className={`mt-12 md:mt-16 w-full max-w-3xl mx-auto transition-opacity duration-1000 ${showArchitecture ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Explore the Architecture</h2>
         <p className="text-base md:text-lg text-gray-600 mb-6 text-center"> {/* Added text-center */}
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
         <p className="text-base md:text-lg text-gray-600 mb-6 text-center"> {/* Added text-center */}
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