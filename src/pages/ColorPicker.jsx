import React, { useState } from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const presets = [
  '#6366f1', '#a855f7', '#ec4899', '#ef4444', '#f97316',
  '#f59e0b', '#84cc16', '#10b981', '#14b8a6', '#3b82f6',
  '#0ea5e9', '#8b5cf6', '#d946ef', '#fb923c', '#facc15',
  '#4ade80', '#34d399', '#38bdf8', '#818cf8', '#c084fc',
];

const ColorPicker = () => {
  const { currentColor, setColor } = useStateContext();
  const [color, setLocalColor] = useState(currentColor);
  const [copied, setCopied] = useState(false);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : '';
  };

  const hexToHsl = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const apply = (c) => {
    setLocalColor(c);
    setColor(c);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <Header category="App" title="Color Picker" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Picker section */}
        <div className="space-y-6">
          {/* Big preview */}
          <div
            className="w-full h-48 rounded-3xl shadow-xl transition-all duration-300 flex items-end"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
          >
            <div className="m-4 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
              <p className="text-white font-bold font-mono text-lg">{color.toUpperCase()}</p>
            </div>
          </div>

          {/* Color input */}
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={color}
              onChange={(e) => apply(e.target.value)}
              className="w-16 h-16 rounded-2xl cursor-pointer border-0 p-1 shadow-md"
            />
            <div className="flex-1">
              <input
                type="text"
                value={color}
                onChange={(e) => /^#[0-9A-Fa-f]{6}$/.test(e.target.value) && apply(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-mono text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Color values */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'HEX', value: color.toUpperCase() },
              { label: 'RGB', value: hexToRgb(color) },
              { label: 'HSL', value: hexToHsl(color) },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => copyToClipboard(item.value)}
                className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <p className="text-xs font-bold text-gray-400 mb-1">{item.label}</p>
                <p className="text-xs font-mono text-gray-700 dark:text-gray-300 truncate">{item.value}</p>
              </button>
            ))}
          </div>
          {copied && (
            <p className="text-xs text-emerald-500 font-semibold animate-pulse">✓ Copied to clipboard!</p>
          )}
        </div>

        {/* Presets section */}
        <div>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest">Preset Colors</p>
          <div className="grid grid-cols-5 gap-3">
            {presets.map((preset) => (
              <button
                key={preset}
                onClick={() => apply(preset)}
                className={`h-12 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-lg ${
                  color === preset ? 'ring-3 ring-offset-2 ring-gray-400 scale-110 shadow-lg' : ''
                }`}
                style={{ background: preset }}
                title={preset}
              />
            ))}
          </div>

          {/* Apply to theme */}
          <div className="mt-8 p-5 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Apply as theme color</p>
            <button
              onClick={() => setColor(color)}
              className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
            >
              Apply Theme Color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
