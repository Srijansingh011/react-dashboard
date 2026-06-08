import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { month: 'Jan', open: 130, close: 142, high: 148, low: 128, volume: 5400 },
  { month: 'Feb', open: 142, close: 156, high: 162, low: 138, volume: 7200 },
  { month: 'Mar', open: 156, close: 148, high: 165, low: 145, volume: 6100 },
  { month: 'Apr', open: 148, close: 164, high: 170, low: 144, volume: 8300 },
  { month: 'May', open: 164, close: 172, high: 178, low: 160, volume: 7600 },
  { month: 'Jun', open: 172, close: 165, high: 180, low: 162, volume: 5900 },
  { month: 'Jul', open: 165, close: 175, high: 182, low: 160, volume: 6800 },
  { month: 'Aug', open: 175, close: 168, high: 185, low: 166, volume: 7100 },
  { month: 'Sep', open: 168, close: 178, high: 188, low: 165, volume: 8900 },
];

const Financial = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="AAPL Stock Price — 2017" />
      <p className="text-sm text-gray-400 mb-8">Monthly OHLC data with trading volume</p>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Open', value: '$130.00', color: '#6366f1' },
          { label: 'High', value: '$188.00', color: '#10b981' },
          { label: 'Low', value: '$128.00', color: '#ef4444' },
          { label: 'Close', value: '$178.00', color: '#f59e0b' },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-center">
            <p className="text-xs text-gray-400 font-medium">{s.label}</p>
            <p className="text-lg font-bold mt-1" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="price" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
          <YAxis yAxisId="vol" orientation="right" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
          />
          <Bar yAxisId="vol" dataKey="volume" fill="#6366f122" radius={[4, 4, 0, 0]} name="Volume" />
          <Line yAxisId="price" type="monotone" dataKey="close" stroke={currentColor} strokeWidth={3} dot={{ r: 5, fill: currentColor, strokeWidth: 2, stroke: '#fff' }} name="Close Price" />
          <Line yAxisId="price" type="monotone" dataKey="high" stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 4" dot={false} name="High" />
          <Line yAxisId="price" type="monotone" dataKey="low" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="4 4" dot={false} name="Low" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Financial;
