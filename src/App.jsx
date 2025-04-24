// src/App.jsx
// Remove useState and other imports if no longer needed here
import HeroSection from './components/HeroSection'; // Adjust path if you place it elsewhere
// Import your Button component if you plan to add it to the HeroSection later
// import Button from './components/Button';

function App() {
  // The main container/styling is handled by HeroSection and index.css
  return (
    <>
      {/* The background SVG is applied via src/index.css to the body */}
      <HeroSection />
      {/* You can add other sections/components below the hero */}
    </>
  );
}

export default App;