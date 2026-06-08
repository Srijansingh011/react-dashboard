import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { FiCreditCard, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';

import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const menuItems = [
  { icon: <FiUser />, title: 'My Profile', desc: 'View & edit profile', color: '#6366f1', bg: '#eef2ff' },
  { icon: <BsCurrencyDollar />, title: 'Billing', desc: 'Manage subscriptions', color: '#10b981', bg: '#ecfdf5' },
  { icon: <FiSettings />, title: 'Settings', desc: 'Preferences', color: '#f59e0b', bg: '#fffbeb' },
  { icon: <FiCreditCard />, title: 'My Tasks', desc: 'Daily to-dos', color: '#a855f7', bg: '#faf5ff' },
];

const UserProfile = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 z-[9999] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-80 border border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Profile header */}
      <div
        className="p-5 text-center relative"
        style={{ background: `linear-gradient(135deg, ${currentColor}22, #a855f722)` }}
      >
        <button
          onClick={() => setIsClicked(initialState)}
          className="absolute top-3 right-3 p-1.5 rounded-xl hover:bg-white/50 text-gray-400 transition-colors"
        >
          <MdOutlineCancel className="text-lg" />
        </button>
        <div className="relative inline-block">
          <img className="rounded-2xl h-20 w-20 object-cover mx-auto ring-4 ring-white dark:ring-gray-800 shadow-xl" src={avatar} alt="profile" />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-white dark:border-gray-800 rounded-full" />
        </div>
        <p className="font-bold text-gray-800 dark:text-white text-lg mt-3">Michael Roberts</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Administrator</p>
        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Online
        </span>
      </div>

      {/* Menu items */}
      <div className="p-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: item.bg, color: item.color }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.title}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
          style={{ background: `linear-gradient(135deg, ${currentColor}, #a855f7)` }}
        >
          <FiLogOut />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;