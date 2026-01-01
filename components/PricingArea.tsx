
import React from 'react';

const counties = [
  'Claiborne', 'Campbell', 'Bell', 'Union', 'Hancock'
];

const PricingArea: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-lightBg border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Pricing Info */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold text-primary uppercase mb-6 flex items-center gap-3">
              <i className="fa-solid fa-tags text-accent"></i>
              Pricing & Lessons
            </h3>
            <ul className="space-y-6">
              <li className="border-b border-gray-100 pb-4">
                <span className="block font-bold text-secondary uppercase text-sm mb-1">Lesson Type</span>
                <p className="text-gray-600">Currently exclusively offering <strong>private lessons</strong> at the owner's residence for maximum focus and comfort.</p>
              </li>
              <li className="border-b border-gray-100 pb-4">
                <span className="block font-bold text-secondary uppercase text-sm mb-1">Cost Structure</span>
                <p className="text-gray-600">Pricing can vary based on individual needs and goals. <strong>Call for a custom quote</strong> today!</p>
              </li>
              <li className="border-b border-gray-100 pb-4">
                <span className="block font-bold text-secondary uppercase text-sm mb-1">Puppy Packages</span>
                <p className="text-gray-600">Comprehensive training packages are available specifically for puppy foundations.</p>
              </li>
              <li>
                <span className="block font-bold text-secondary uppercase text-sm mb-1">Travel Policy</span>
                <p className="text-gray-600 italic">A trip charge may be applied to residences requiring a long drive.</p>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-4">Serving Local Communities</h2>
            <div className="w-16 h-1 bg-accent mb-8"></div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We bring the training to you. Hollar Hound Academy provides in-home professional dog training across the following Tennessee and Kentucky border counties:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {counties.map((county, idx) => (
                <div key={idx} className="flex items-center gap-3 text-secondary font-bold bg-white p-4 rounded-sm border border-gray-200">
                  <i className="fa-solid fa-location-dot text-accent"></i>
                  {county} County
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 italic">
              Don't see your county? Contact us to see if we can accommodate your location.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingArea;
