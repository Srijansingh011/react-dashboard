import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-16 top-16 z-[9999] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-80 border border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center"
        style={{ background: `linear-gradient(135deg, ${currentColor}15, #a855f715)` }}>
        <div>
          <p className="font-bold text-gray-800 dark:text-white">Messages</p>
          <p className="text-xs text-gray-400 mt-0.5">5 unread messages</p>
        </div>
        <button
          onClick={() => setIsClicked(initialState)}
          className="p-1.5 rounded-xl hover:bg-white/50 text-gray-400 transition-colors"
        >
          <MdOutlineCancel className="text-lg" />
        </button>
      </div>

      {/* Messages list */}
      <div className="max-h-80 overflow-y-auto">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-800"
          >
            <div className="relative flex-shrink-0">
              <img className="rounded-full h-10 w-10 object-cover" src={item.image} alt={item.message} />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{item.message}</p>
                <p className="text-xs text-gray-400 flex-shrink-0 ml-2">{item.time}</p>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{item.desc}</p>
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
          View all messages
        </button>
      </div>
    </div>
  );
};

export default Chat;
