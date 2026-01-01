
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white pt-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(20, 40, 30, 0.7), rgba(20, 40, 30, 0.6)), url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-6">
          Unleash Your Dog's<br />Potential
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 opacity-90">
          From the backyard to the backwoods. Professional, personalized training for the modern family dog, right in your own home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-sm font-bold hover:bg-accentHover transition-all uppercase tracking-widest">
            Get Started
          </a>
          <a href="#about" className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-sm font-bold hover:bg-white hover:text-primary transition-all uppercase tracking-widest">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
