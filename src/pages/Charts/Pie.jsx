import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const data = [
  { name: 'Labour', value: 18 },
  { name: 'Legal', value: 8 },
  { name: 'Production', value: 15 },
  { name: 'License', value: 11 },
  { name: 'Facilities', value: 18 },
  { name: 'Taxes', value: 14 },
  { name: 'Insurance', value: 16 },
];

const COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="700">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PiePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { currentColor } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <ChartsHeader category="Charts" title="Project Cost Breakdown" />
      <p className="text-sm text-gray-400 mb-8">Distribution of project costs across key categories</p>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={140}
              innerRadius={60}
              dataKey="value"
              labelLine={false}
              label={renderLabel}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="none"
                  opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                  style={{ transition: 'opacity 0.2s', cursor: 'pointer' }}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', padding: '12px 16px', fontSize: '13px' }}
              formatter={(v, name) => [`${v}%`, name]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend Detail */}
        <div className="w-full lg:w-64 space-y-3">
          {data.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-gray-800 dark:text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PiePage;
