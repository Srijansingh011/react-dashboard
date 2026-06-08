import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { year: '2002', USA: 2.2, France: 2.0, Germany: 0.8 },
  { year: '2003', USA: 3.4, France: 1.7, Germany: 1.3 },
  { year: '2004', USA: 2.8, France: 1.8, Germany: 1.1 },
  { year: '2005', USA: 1.6, France: 2.1, Germany: 1.6 },
  { year: '2006', USA: 2.3, France: 2.3, Germany: 2.0 },
  { year: '2007', USA: 2.5, France: 1.7, Germany: 1.7 },
  { year: '2008', USA: 2.9, France: 1.5, Germany: 2.3 },
  { year: '2009', USA: 3.8, France: 2.8, Germany: 2.7 },
  { year: '2010', USA: 1.4, France: 1.5, Germany: 1.1 },
  { year: '2011', USA: 3.1, France: 2.3, Germany: 2.3 },
];

const AreaPage = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Inflation Rate in Percentage" />
      <p className="text-sm text-gray-400 mb-8">Spline area chart comparing USA, France, and Germany</p>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
          <defs>
            {[
              { id: 'areaUSA', color: currentColor },
              { id: 'areaFrance', color: '#a855f7' },
              { id: 'areaGermany', color: '#ec4899' },
            ].map(({ id, color }) => (
              <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 13, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
            formatter={(v) => [`${v}%`]}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
          <Area type="monotone" dataKey="USA" stroke={currentColor} strokeWidth={2.5} fill="url(#areaUSA)" />
          <Area type="monotone" dataKey="France" stroke="#a855f7" strokeWidth={2.5} fill="url(#areaFrance)" />
          <Area type="monotone" dataKey="Germany" stroke="#ec4899" strokeWidth={2.5} fill="url(#areaGermany)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaPage;
