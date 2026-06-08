import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { year: '2005', USA: 21, France: 28, Germany: 10 },
  { year: '2006', USA: 24, France: 44, Germany: 16 },
  { year: '2007', USA: 36, France: 48, Germany: 30 },
  { year: '2008', USA: 38, France: 50, Germany: 38 },
  { year: '2009', USA: 54, France: 66, Germany: 54 },
  { year: '2010', USA: 57, France: 78, Germany: 60 },
  { year: '2011', USA: 70, France: 84, Germany: 74 },
];

const COLORS = { USA: '#6366f1', France: '#a855f7', Germany: '#ec4899' };

const LinePage = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Inflation Rate" />
      <p className="text-sm text-gray-400 mb-8">Global inflation rates from 2005–2011 across major economies</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
            formatter={(v, name) => [`${v}%`, name]}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
          {Object.entries(COLORS).map(([key, color]) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={color}
              strokeWidth={3}
              dot={{ r: 5, fill: color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 8, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinePage;
