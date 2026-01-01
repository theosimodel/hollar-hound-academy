
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 py-16 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <a href="#" className="text-2xl font-black text-white uppercase tracking-tighter mb-8 inline-block">
          Hollar Hound <span className="text-accent">Academy</span>
        </a>
        
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <a href="#about" className="hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">About</a>
          <a href="#services" className="hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Training</a>
          <a href="#pricing" className="hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Contact</a>
        </div>

        <div className="flex justify-center gap-6 mb-10 text-xl text-gray-500">
          <a href="#" className="hover:text-accent transition-colors"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover:text-accent transition-colors"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-sm opacity-50">&copy; {new Date().getFullYear()} Hollar Hound Academy. All Rights Reserved.</p>
          <p className="text-xs mt-2 opacity-30">Certified Trainer by Animal Behavior College | Stacy Williams</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
