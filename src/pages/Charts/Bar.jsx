import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { country: 'USA', Gold: 46, Silver: 37, Bronze: 38 },
  { country: 'GBR', Gold: 27, Silver: 23, Bronze: 17 },
  { country: 'CHN', Gold: 26, Silver: 18, Bronze: 26 },
];

const BarPage = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Olympic Medal Counts — RIO" />
      <p className="text-sm text-gray-400 mb-8">Gold, Silver, and Bronze medal distribution by country</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="country" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
          <Bar dataKey="Gold" fill="#f59e0b" radius={[6, 6, 0, 0]} />
          <Bar dataKey="Silver" fill="#94a3b8" radius={[6, 6, 0, 0]} />
          <Bar dataKey="Bronze" fill="#b45309" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarPage;
