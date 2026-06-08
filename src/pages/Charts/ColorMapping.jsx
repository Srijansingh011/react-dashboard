import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer,
} from 'recharts';
import { ChartsHeader } from '../../components';

const data = [
  { month: 'Jan', temp: 6.96 },
  { month: 'Feb', temp: 8.9 },
  { month: 'Mar', temp: 12 },
  { month: 'Apr', temp: 17.5 },
  { month: 'May', temp: 22.1 },
  { month: 'Jun', temp: 25 },
  { month: 'Jul', temp: 29.4 },
  { month: 'Aug', temp: 29.6 },
  { month: 'Sep', temp: 25.8 },
  { month: 'Oct', temp: 21.1 },
  { month: 'Nov', temp: 15.5 },
  { month: 'Dec', temp: 9.9 },
];

const getColor = (temp) => {
  if (temp <= 10) return '#93c5fd';
  if (temp <= 20) return '#fbbf24';
  return '#ef4444';
};

const getRangeLabel = (temp) => {
  if (temp <= 10) return 'Cold (1–10°C)';
  if (temp <= 20) return 'Mild (11–20°C)';
  return 'Hot (21–30°C)';
};

const ColorMapping = () => (
  <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
    <ChartsHeader category="Charts" title="UK Climate — Temperature Variation" />
    <p className="text-sm text-gray-400 mb-6">Monthly average temperature with color-coded ranges</p>

    {/* Legend */}
    <div className="flex gap-6 mb-8 flex-wrap">
      {[
        { label: '1–10°C (Cold)', color: '#93c5fd' },
        { label: '11–20°C (Mild)', color: '#fbbf24' },
        { label: '21–30°C (Hot)', color: '#ef4444' },
      ].map((r) => (
        <div key={r.label} className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-md" style={{ background: r.color }} />
          <span className="text-sm text-gray-500">{r.label}</span>
        </div>
      ))}
    </div>

    <ResponsiveContainer width="100%" height={380}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}°C`} />
        <Tooltip
          contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
          formatter={(v) => [`${v}°C`, 'Temperature']}
        />
        <Bar dataKey="temp" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.temp)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ColorMapping;
