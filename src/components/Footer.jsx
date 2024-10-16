import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-green-400">SimplyShop</h1>
          <p className="text-sm leading-relaxed text-gray-600">
            SimplyShop is an easy-to-use online shopping platform that provides a seamless experience for browsing, selecting, and purchasing products. We offer a wide range of items, from fashion and electronics to home essentials and more.
          </p>
        </div>

        
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Facebook</a></li>
            <li><a href="#" className="hover:text-green-400">Instagram</a></li>
            <li><a href="#" className="hover:text-green-400">Twitter</a></li>
           
          </ul>
        </div>

     
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Our Address</h3>
          <p className="text-sm text-gray-600">
            45 Industrial Park Lane, <br />
            Naroda, Ahmedabad, Gujarat 382330 <br />
            India
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2024 SimplyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
