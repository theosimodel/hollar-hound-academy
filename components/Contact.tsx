
import React, { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xqeapkee';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    county: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          county: formData.county,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', county: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm shadow-2xl p-8 md:p-12 text-center">
              <div className="text-6xl text-accent mb-6">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary uppercase mb-4">Request Received!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for reaching out! Stacy will be in touch shortly to discuss training for your dog.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-accent text-white px-8 py-3 rounded-sm font-bold uppercase hover:bg-accentHover transition-all"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">Join The Academy</h2>
            <p className="text-gray-300 opacity-80">Fill out the form below to schedule your evaluation and start your journey.</p>
          </div>

          <div className="bg-white rounded-sm shadow-2xl p-8 md:p-12 text-gray-800">
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-sm mb-6">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Owner Name</label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="phone"
                  placeholder="(000) 000-0000"
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-primary mb-2">Your County</label>
                <select
                  name="county"
                  className="bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  value={formData.county}
                  onChange={(e) => setFormData({...formData, county: e.target.value})}
                >
                  <option value="">Select County</option>
                  <option value="Claiborne">Claiborne</option>
                  <option value="Campbell">Campbell</option>
                  <option value="Bell">Bell</option>
                  <option value="Union">Union</option>
                  <option value="Hancock">Hancock</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-xs font-bold uppercase text-primary mb-2">About Your Dog</label>
                <textarea
                  name="message"
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
                  disabled={status === 'submitting'}
                  className="w-full bg-accent text-white font-bold uppercase py-4 rounded-sm hover:bg-accentHover transition-all tracking-widest shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Training Request'}
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
