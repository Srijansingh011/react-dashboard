import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { year: '2014', Series1: 111.1, Series2: 76.9, Series3: 66.1 },
  { year: '2015', Series1: 127.3, Series2: 99.5, Series3: 79.3 },
  { year: '2016', Series1: 143.4, Series2: 121.7, Series3: 91.3 },
  { year: '2017', Series1: 159.9, Series2: 142.5, Series3: 102.4 },
  { year: '2018', Series1: 175.4, Series2: 166.7, Series3: 112.9 },
  { year: '2019', Series1: 189.0, Series2: 182.9, Series3: 122.4 },
];

const Stacked = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Revenue Breakdown" />
      <p className="text-sm text-gray-400 mb-8">Stacked bar chart showing revenue contribution by series</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
          <Bar dataKey="Series1" stackId="a" fill={currentColor} radius={[0, 0, 0, 0]} />
          <Bar dataKey="Series2" stackId="a" fill="#a855f7" />
          <Bar dataKey="Series3" stackId="a" fill="#ec4899" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
