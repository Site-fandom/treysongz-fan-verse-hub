
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'VIP Experience', path: '/vip-experience' },
  { name: 'Charity', path: '/charity' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-trey-darkPurple border-b border-trey-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Trey's World</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-1 py-2 text-sm font-bold relative group",
                  location.pathname === item.path 
                    ? "text-trey-gold" 
                    : "text-white hover:text-trey-gold"
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-trey-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                    location.pathname === item.path ? "scale-x-100" : ""
                  )}
                />
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="text-white hover:text-trey-gold"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-trey-darkPurple z-40 transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full pt-20 px-4 space-y-8 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "px-4 py-3 text-lg font-bold rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-muted text-trey-gold" 
                  : "text-white hover:bg-muted/50 hover:text-trey-gold"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => setIsMenuOpen(false)}
            className="mt-auto mb-10 font-bold text-white hover:text-trey-gold"
          >
            Close Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
