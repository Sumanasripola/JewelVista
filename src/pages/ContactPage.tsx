import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-slate-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-medium flex items-center group transition-colors"
              >
                Send Message
                <Send className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </form>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">contact@jewelvista.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white">Address</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      123 Jewelry Lane<br />
                      Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <h3 className="font-medium text-slate-800 dark:text-white mb-2">Business Hours</h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;