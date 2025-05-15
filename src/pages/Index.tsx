
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
    <div className="min-h-screen bg-white">
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
