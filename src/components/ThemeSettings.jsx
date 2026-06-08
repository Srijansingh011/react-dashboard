import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className="fixed inset-0 z-[9999]" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
      <div className="absolute right-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-lg font-bold text-gray-800 dark:text-white">Theme Settings</p>
            <p className="text-xs text-gray-400 mt-0.5">Personalize your experience</p>
          </div>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
          >
            <MdOutlineCancel className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Mode Selection */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Color Mode
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'Light', icon: '☀️', desc: 'Light mode' },
                { value: 'Dark', icon: '🌙', desc: 'Dark mode' },
              ].map((mode) => (
                <label
                  key={mode.value}
                  htmlFor={mode.value.toLowerCase()}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                    currentMode === mode.value
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <input
                    type="radio"
                    id={mode.value.toLowerCase()}
                    name="theme"
                    value={mode.value}
                    className="sr-only"
                    onChange={setMode}
                    checked={currentMode === mode.value}
                  />
                  <span className="text-2xl">{mode.icon}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{mode.desc}</span>
                  {currentMode === mode.value && (
                    <span className="absolute top-2 right-2 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                      <BsCheck className="text-white text-xs" />
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Accent Color
            </p>
            <div className="grid grid-cols-3 gap-3">
              {themeColors.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setColor(item.color)}
                  className={`relative h-14 rounded-2xl transition-all duration-200 hover:scale-105 ${
                    item.color === currentColor ? 'ring-2 ring-offset-2 ring-gray-400 scale-105' : ''
                  }`}
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}88)` }}
                  title={item.name}
                >
                  {item.color === currentColor && (
                    <BsCheck className="text-white text-xl absolute inset-0 m-auto" />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2 font-medium">Custom Color</p>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={currentColor}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-10 rounded-xl cursor-pointer border-0"
                />
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{currentColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
