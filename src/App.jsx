// src/App.jsx
import HeroSection from './components/HeroSection';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // The main container/styling is handled by HeroSection and index.css
  return (
    <>
      
      <HeroSection />
      
      <Analytics />
    </>
  );
}

export default App;