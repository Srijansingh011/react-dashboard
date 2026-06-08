import React from 'react';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const pyramidData = [
  { label: 'Sweet Treats', value: 120, pct: 12, cal: '120 cal' },
  { label: 'Milk & Cheese', value: 435, pct: 28, cal: '435 cal' },
  { label: 'Vegetables', value: 470, pct: 40, cal: '470 cal' },
  { label: 'Meat & Fish', value: 475, pct: 55, cal: '475 cal' },
  { label: 'Fruits', value: 520, pct: 70, cal: '520 cal' },
  { label: 'Bread & Grains', value: 930, pct: 100, cal: '930 cal' },
];

const colors = [
  'linear-gradient(90deg, #ef4444, #f97316)',
  'linear-gradient(90deg, #f97316, #f59e0b)',
  'linear-gradient(90deg, #84cc16, #22c55e)',
  'linear-gradient(90deg, #10b981, #14b8a6)',
  'linear-gradient(90deg, #3b82f6, #6366f1)',
  'linear-gradient(90deg, #6366f1, #a855f7)',
];

const Pyramid = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Food Pyramid" />
      <p className="text-sm text-gray-400 mb-10">Recommended daily caloric intake by food group</p>

      <div className="flex flex-col items-center gap-3 max-w-lg mx-auto">
        {[...pyramidData].reverse().map((item, i) => {
          const idx = pyramidData.length - 1 - i;
          return (
            <div key={item.label} className="w-full flex flex-col items-center">
              <div
                className="flex items-center justify-center text-white text-sm font-bold rounded-2xl transition-transform hover:scale-105 cursor-pointer shadow-md"
                style={{
                  width: `${item.pct}%`,
                  height: '48px',
                  background: colors[idx],
                  minWidth: '100px',
                }}
              >
                {item.label}
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.cal}</p>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
        {pyramidData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colors[i].includes('gradient') ? '#6366f1' : colors[i] }} />
            <div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.label}</p>
              <p className="text-xs text-gray-400">{item.cal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pyramid;
