import React, { useState } from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const events = {
  '2026-6-10': [{ title: 'Team Meeting', color: '#6366f1' }],
  '2026-6-15': [{ title: 'Product Launch', color: '#10b981' }],
  '2026-6-20': [{ title: 'Q2 Review', color: '#f59e0b' }],
  '2026-6-25': [{ title: 'Conference', color: '#ec4899' }],
};

const Calendar = () => {
  const { currentColor } = useStateContext();
  const today = new Date();
  const [current, setCurrent] = useState({ month: today.getMonth(), year: today.getFullYear() });
  const [selected, setSelected] = useState(today.getDate());

  const firstDay = new Date(current.year, current.month, 1).getDay();
  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();

  const prev = () => setCurrent((c) => c.month === 0 ? { month: 11, year: c.year - 1 } : { ...c, month: c.month - 1 });
  const next = () => setCurrent((c) => c.month === 11 ? { month: 0, year: c.year + 1 } : { ...c, month: c.month + 1 });

  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <Header category="App" title="Calendar" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Calendar Grid */}
        <div className="flex-1">
          {/* Month nav */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
            >
              ‹
            </button>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {MONTHS[current.month]} {current.year}
            </h2>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
            >
              ›
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-bold text-gray-400 py-2">{d}</div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1">
            {Array(firstDay).fill(null).map((_, i) => <div key={`e-${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const key = `${current.year}-${current.month + 1}-${day}`;
              const hasEvent = events[key];
              const isToday = day === today.getDate() && current.month === today.getMonth() && current.year === today.getFullYear();
              const isSelected = day === selected;

              return (
                <button
                  key={day}
                  onClick={() => setSelected(day)}
                  className={`relative aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                    isSelected
                      ? 'text-white shadow-lg'
                      : isToday
                      ? 'font-bold text-indigo-600'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  style={isSelected ? { background: `linear-gradient(135deg, ${currentColor}, #a855f7)` } : {}}
                >
                  {day}
                  {hasEvent && (
                    <div className="flex gap-0.5 mt-0.5">
                      {hasEvent.map((ev, i) => (
                        <div key={i} className="w-1 h-1 rounded-full" style={{ background: isSelected ? '#fff' : ev.color }} />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="lg:w-72">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {Object.entries(events).map(([dateKey, evList]) => (
              evList.map((ev, i) => (
                <div key={`${dateKey}-${i}`} className="flex gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: ev.color }} />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">{ev.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{dateKey.replace(`${current.year}-`, '')}</p>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
