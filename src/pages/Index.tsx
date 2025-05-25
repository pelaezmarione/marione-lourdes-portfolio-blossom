
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Family from '@/pages/Family';
import Experience from '@/pages/Experience';
import Interests from '@/pages/Interests';

const Index = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen bg-[#fff9f5]"
      style={{
        // ADD YOUR DASHBOARD BACKGROUND IMAGE HERE - Replace 'your-dashboard-background.jpg' with your image path
        backgroundImage: "url('/images/bgbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navigation />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="family" element={<Family />} />
        <Route path="experience" element={<Experience />} />
        <Route path="interests" element={<Interests />} />
      </Routes>
    </div>
  );
};

export default Index;
