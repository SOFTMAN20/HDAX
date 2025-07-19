import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: t('home') },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/#contact", label: "Contact Us" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/de034e97-3212-4844-9be3-b0bf04d07d5e.png" 
                alt="HDA Company Limited Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                HDA COMPANY LIMITED
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-all duration-300 px-3 py-2 rounded-md text-lg font-medium group ${
                  isActive(item.path) 
                    ? "text-yellow-400 bg-yellow-400/10" 
                    : "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Phone & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Have any questions?</span>
              <span className="font-semibold">Call: +258 713 365 874</span>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-6 py-4 space-y-4">
            <div className="border-b border-slate-600 pb-4 flex justify-between items-center">
              <LanguageSwitcher />
              <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+258 713 365 874</span>
              </div>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block transition-all duration-300 py-3 px-4 rounded-md border-l-4 ${
                  isActive(item.path)
                    ? "text-yellow-400 bg-yellow-400/10 border-yellow-400"
                    : "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 border-transparent hover:border-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;