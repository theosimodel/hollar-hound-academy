
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Stacy Williams Training" 
                className="rounded-sm shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            {/* The primary color frame decoration */}
            <div className="absolute top-8 left-8 -z-0 w-full h-full border-8 border-primary rounded-sm hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-4">Meet Stacy Williams</h2>
            <div className="w-16 h-1 bg-accent mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-bold text-xl text-secondary">
                "Every dog deserves to be understood."
              </p>
              <p>
                As a <strong>Certified Trainer by Animal Behavior College</strong>, I have dedicated my career to fostering deeper bonds between dogs and their owners. I believe that training is more than just commands; it's about clear communication and mutual trust.
              </p>
              <ul className="space-y-4 list-none">
                <li className="flex gap-4">
                  <span className="text-accent mt-1"><i className="fa-solid fa-graduation-cap"></i></span>
                  <span>Studied <strong>Beyond Obedience</strong> courses by Tracy Franken to further enhance the owner-dog bond.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent mt-1"><i className="fa-solid fa-hands-holding"></i></span>
                  <span>Completed a deep mentorship with Theresa Aguilar of <strong>K9 Heeler</strong> in Texas, working closely with local rescues to encourage adoptions through behavior work.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent mt-1"><i className="fa-solid fa-mountain"></i></span>
                  <span>Recently moved to the beautiful landscapes of Tennessee for a slower lifestyle and the inspiring natural beauty of the region.</span>
                </li>
              </ul>
              <p>
                My mission is to help owners understand their dogs on a fundamental level, providing them with the tools they need to strengthen their relationship and enjoy a peaceful life together. Looking forward, I'm excited to eventually add herding training to my repertoire!
              </p>
              
              <div className="pt-6">
                <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase hover:bg-secondary transition-colors">
                  Meet Your Trainer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
