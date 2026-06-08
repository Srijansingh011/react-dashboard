import React from 'react';

const Header = ({ category, title }) => (
  <div className="mb-8">
    <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</p>
  </div>
);

export default Header;
