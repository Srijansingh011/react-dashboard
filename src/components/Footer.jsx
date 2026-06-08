import React from 'react';

const Footer = () => (
  <div className="flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-8">
    <p className="text-sm text-gray-400">
      © 2024 <span className="font-semibold text-gray-600 dark:text-gray-300">Shoppy</span>. All rights reserved.
    </p>
    <div className="flex items-center gap-4">
      {['Privacy', 'Terms', 'Contact'].map((item) => (
        <a key={item} href="#" className="text-sm text-gray-400 hover:text-indigo-500 transition-colors">
          {item}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
