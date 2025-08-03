import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center">About JewelVista</h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden mb-16">
          <img 
            src="https://images.pexels.com/photos/5370705/pexels-photo-5370705.jpeg" 
            alt="Jewelry crafting" 
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              JewelVista was founded with a passion for combining traditional jewelry craftsmanship with modern 3D visualization technology. Our journey began when a team of jewelry designers and 3D artists came together with a shared vision: to create a platform where exquisite jewelry designs could be experienced in their full glory through interactive 3D models.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, we pride ourselves on creating stunning 3D models that capture every facet, curve, and detail of our jewelry pieces. By leveraging Blender's powerful 3D capabilities, we allow our customers to explore each creation from every angle before making their purchase decision.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Our Approach</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Each jewelry piece begins as a concept sketch, which is then meticulously translated into a detailed 3D model. Our artists spend countless hours perfecting every detail, from the placement of gemstones to the texture of metal surfaces, ensuring that the final 3D representation is accurate to the smallest detail.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Why 3D Models?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              3D models provide an unparalleled way to experience jewelry design. Unlike static images, our Blender models allow you to rotate, zoom, and examine each piece from any angle, giving you a complete understanding of the design before you even hold it in your hands. This interactive approach revolutionizes how we appreciate and select jewelry.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Our Commitment</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Quality</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We never compromise on the quality of our 3D models. Each model undergoes rigorous reviews to ensure it accurately represents the physical jewelry piece in every detail.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We continuously explore new techniques and technologies to enhance our 3D modeling capabilities, pushing the boundaries of what's possible in jewelry visualization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Customer Experience</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We are dedicated to providing an exceptional user experience, making it easy for you to explore and appreciate our jewelry designs through interactive 3D models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;