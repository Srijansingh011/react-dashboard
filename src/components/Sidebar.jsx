import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Tooltip from './Tooltip';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) setActiveMenu(false);
  };

  const activeLink =
    'flex items-center gap-3 pl-4 pt-3 pb-3 rounded-xl text-white text-sm font-semibold m-2 active-link transition-all duration-200';
  const normalLink =
    'flex items-center gap-3 pl-4 pt-3 pb-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 m-2 transition-all duration-200';

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800">
      {activeMenu && (
        <>
          {/* Logo */}
          <div className="flex justify-between items-center px-4 pt-5 pb-4 border-b border-gray-100 dark:border-gray-800">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-2.5"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-glow"
                style={{ background: `linear-gradient(135deg, ${currentColor}, #a855f7)` }}
              >
                <FiShoppingBag className="text-white text-lg" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-white tracking-tight">Shoppy</p>
                <p className="text-xs text-gray-400 -mt-0.5">Dashboard</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden transition-colors"
            >
              <MdOutlineCancel className="text-xl" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="mt-4 px-1">
            {links.map((item) => (
              <div key={item.title} className="mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 ml-4 mb-2">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      background: isActive
                        ? `linear-gradient(135deg, ${currentColor}, #a855f7)`
                        : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="capitalize">{link.name}</span>
                    {link.name === 'ecommerce' && (
                      <span className="ml-auto mr-3 bg-emerald-100 text-emerald-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Card */}
          <div className="mx-4 mt-4 p-4 rounded-2xl" style={{ background: `linear-gradient(135deg, ${currentColor}22, #a855f722)` }}>
            <div className="w-8 h-8 rounded-xl mb-2 flex items-center justify-center" style={{ background: currentColor }}>
              <FiShoppingBag className="text-white text-sm" />
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Need help?</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Check our docs</p>
            <button
              className="mt-3 w-full text-white text-xs font-semibold py-2 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: currentColor }}
            >
              Documentation
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
