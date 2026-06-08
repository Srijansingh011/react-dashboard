import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsBell, BsShield, BsBoxSeam } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';

import { useStateContext } from '../contexts/ContextProvider';

const notifications = [
  {
    icon: <FiPackage />,
    title: 'New order #3462',
    desc: 'Customer placed a new order',
    time: '2 min ago',
    color: '#6366f1',
    bg: '#eef2ff',
    unread: true,
  },
  {
    icon: <BsShield />,
    title: 'Security alert',
    desc: 'New login from unknown device',
    time: '18 min ago',
    color: '#f59e0b',
    bg: '#fffbeb',
    unread: true,
  },
  {
    icon: <BsBoxSeam />,
    title: 'Order #3453 ready',
    desc: 'Ready to ship',
    time: '1 hr ago',
    color: '#10b981',
    bg: '#ecfdf5',
    unread: false,
  },
  {
    icon: <BsBell />,
    title: 'Product low stock',
    desc: 'Item #PD-4521 running low',
    time: '3 hr ago',
    color: '#ef4444',
    bg: '#fef2f2',
    unread: false,
  },
];

const Notification = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-8 top-16 z-[9999] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-80 border border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Header */}
      <div
        className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center"
        style={{ background: `linear-gradient(135deg, ${currentColor}15, #a855f715)` }}
      >
        <div>
          <p className="font-bold text-gray-800 dark:text-white">Notifications</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {notifications.filter((n) => n.unread).length} unread
          </p>
        </div>
        <button
          onClick={() => setIsClicked(initialState)}
          className="p-1.5 rounded-xl hover:bg-white/50 text-gray-400 transition-colors"
        >
          <MdOutlineCancel className="text-lg" />
        </button>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
              item.unread ? 'bg-indigo-50/30 dark:bg-indigo-900/10' : ''
            }`}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
              style={{ background: item.bg, color: item.color }}
            >
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                {item.unread && (
                  <span className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: currentColor }} />
                )}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4">
        <button
          type="button"
          className="w-full py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ background: `linear-gradient(135deg, ${currentColor}, #a855f7)` }}
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default Notification;
