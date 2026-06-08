import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import Tooltip from './Tooltip';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-xl p-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
    >
      {dotColor && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2.5 w-2.5 right-1.5 top-1.5 ring-2 ring-white dark:ring-gray-900"
        />
      )}
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between items-center p-3 md:px-6 relative">
      {/* Left - Menu Toggle */}
      <div className="flex items-center gap-3">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu(!activeMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <div className="hidden md:flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-gray-600 dark:text-gray-300 outline-none w-48 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right - Action buttons */}
      <div className="flex items-center gap-1">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#10b981"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#f59e0b"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        {/* Divider */}
        <div className="w-px h-7 bg-gray-200 dark:bg-gray-700 mx-2" />

        {/* Profile */}
        <Tooltip content="My Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2.5 cursor-pointer p-1.5 pr-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all duration-200"
            onClick={() => handleClick('userProfile')}
          >
            <div className="relative">
              <img className="rounded-xl w-9 h-9 object-cover" src={avatar} alt="user-profile" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-gray-400 dark:text-gray-500">Welcome back,</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Michael</p>
            </div>
            <MdKeyboardArrowDown className="text-gray-400 hidden md:block" />
          </div>
        </Tooltip>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
