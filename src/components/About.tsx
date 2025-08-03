import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">About JewelVista</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            JewelVista showcases our meticulously crafted 3D jewelry models, allowing you to experience the intricate details of each piece. Our collection represents the perfect blend of artistry and technology.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Each 3D model can be opened and viewed, giving you a comprehensive view from every angle. Explore the craftsmanship and design elements that make each piece special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow text-center">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">High-Quality Models</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Each 3D model is crafted with precision and attention to detail, ensuring realistic representation.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow text-center">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Interactive Viewing</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Open any model to explore every angle and detail in a fully interactive environment.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow text-center">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Artistic Design</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Our designs blend traditional jewelry craftsmanship with modern digital artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;