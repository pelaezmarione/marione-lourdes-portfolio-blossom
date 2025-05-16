
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, User, Users, Briefcase, Heart as HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if the current route matches the given path
  const isActive = (path: string) => location.pathname === path;
  
  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <User className="w-4 h-4 mr-1.5" /> },
    { name: 'Family', path: '/family', icon: <Users className="w-4 h-4 mr-1.5" /> },
    { name: 'Experience', path: '/experience', icon: <Briefcase className="w-4 h-4 mr-1.5" /> },
    { name: 'Interests', path: '/interests', icon: <HeartIcon className="w-4 h-4 mr-1.5" /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#fff9f5]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Heart Symbol */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#fb6f92] animate-pulse" />
            <span className="font-extrabold text-xl bg-gradient-to-r from-[#ff8fab] to-[#fb6f92] bg-clip-text text-transparent">
              Marione
            </span>
          </Link>

          {/* Desktop Navigation - Updated with curved border design */}
          <div className="hidden md:flex bg-[#ffc2d1]/30 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "flex items-center font-medium mx-3 py-1.5 px-3 transition-colors rounded-full",
                  isActive(link.path) 
                    ? "bg-[#ffb3c6] text-[#fb6f92]"
                    : "text-[#fb6f92]/70 hover:bg-[#ffe5ec] hover:text-[#fb6f92]"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-[#ffe5ec] hover:bg-[#ffb3c6] border-[#ff8fab]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fb6f92]">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fb6f92]">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-[#fff9f5] md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 p-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center p-3 text-lg rounded-md transition-colors",
                    isActive(link.path)
                      ? "bg-[#ffb3c6] text-[#fb6f92] font-medium"
                      : "text-[#fb6f92]/70 hover:bg-[#ffe5ec] hover:text-[#fb6f92]"
                  )}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
