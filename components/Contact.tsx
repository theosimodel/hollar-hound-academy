
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    county: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Stacy will be in touch shortly to discuss training for your dog.`);
    setFormData({ name: '', email: '', phone: '', county: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">Join The Academy</h2>
            <p className="text-gray-300 opacity-80">Fill out the form below to schedule your evaluation and start your journey.</p>
          </div>

          <div className="bg-white rounded-sm shadow-2xl p-8 md:p-12 text-gray-800">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Owner Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@email.com"
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(000) 000-0000"
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Your County</label>
                <select 
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.county}
                  onChange={(e) => setFormData({...formData, county: e.target.value})}
                >
                  <option value="">Select County</option>
                  <option value="claiborne">Claiborne</option>
                  <option value="campbell">Campbell</option>
                  <option value="bell">Bell</option>
                  <option value="union">Union</option>
                  <option value="hancock">Hancock</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-xs font-bold uppercase text-primary mb-2">About Your Dog</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dog's breed, age, and behavior goals..."
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-accent text-white font-bold uppercase py-4 rounded-sm hover:bg-accentHover transition-all tracking-widest shadow-lg"
                >
                  Send Training Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
