
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Users, Briefcase, Heart } from "lucide-react";
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
    { name: 'Interests', path: '/interests', icon: <Heart className="w-4 h-4 mr-1.5" /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-extrabold text-xl bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            Marione
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "flex items-center font-medium transition-colors hover:text-pink-500",
                isActive(link.path) 
                  ? "text-pink-600 border-b-2 border-pink-500"
                  : "text-gray-700"
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
          className="md:hidden bg-pink-50 hover:bg-pink-100 border-pink-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-white md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 p-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center p-3 text-lg rounded-md transition-colors",
                    isActive(link.path)
                      ? "bg-pink-100 text-pink-700 font-medium"
                      : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
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
