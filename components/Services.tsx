
import React from 'react';

const programs = [
  {
    icon: 'fa-paw',
    title: 'Puppy Foundations',
    description: 'Specialized training packages designed to build the groundwork for a confident dog. Covering potty training, crate training, socialization, and initial engagement.'
  },
  {
    icon: 'fa-dog',
    title: 'Private Lessons',
    description: 'One-on-one sessions tailored to your specific needs. From basic obedience to advanced manners, we work directly at your residence for real-world results.'
  },
  {
    icon: 'fa-heart-circle-check',
    title: 'Bond & Relationship',
    description: 'Strengthen the connection between you and your dog. We focus on clear communication and mutual respect using proven methods.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-lightBg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-4">Our Programs</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            We don't just train dogs; we teach owners to understand their dogs better and build lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-accent text-center group">
              <div className="text-5xl text-primary mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
