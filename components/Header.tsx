
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center h-20">
          <a href="#" className="text-xl md:text-2xl font-extrabold text-primary tracking-wider uppercase">
            Hollar Hound <span className="text-accent">Academy</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#services" className="font-semibold text-primary hover:text-accent transition-colors uppercase text-sm">Services</a></li>
            <li><a href="#about" className="font-semibold text-primary hover:text-accent transition-colors uppercase text-sm">About</a></li>
            <li><a href="#pricing" className="font-semibold text-primary hover:text-accent transition-colors uppercase text-sm">Pricing</a></li>
            <li>
              <a href="#contact" className="bg-accent text-white px-6 py-3 rounded-sm font-bold hover:bg-accentHover transition-all uppercase text-sm tracking-wide">
                Book Consult
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 absolute w-full left-0 shadow-xl transition-all">
            <ul className="flex flex-col items-center space-y-6">
              <li><a href="#services" onClick={() => setIsOpen(false)} className="font-semibold text-primary uppercase">Services</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)} className="font-semibold text-primary uppercase">About</a></li>
              <li><a href="#pricing" onClick={() => setIsOpen(false)} className="font-semibold text-primary uppercase">Pricing</a></li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="bg-accent text-white px-8 py-3 rounded-sm font-bold uppercase block text-center">
                  Book Consult
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
