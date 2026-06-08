import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';
import { FiUsers, FiShoppingBag, FiDollarSign, FiRefreshCw } from 'react-icons/fi';

import { earningData, recentTransactions, weeklyStats, productsPerformance, medicalproBranding } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const sparkData = [
  { v: 30 }, { v: 45 }, { v: 28 }, { v: 60 }, { v: 55 }, { v: 75 }, { v: 65 }, { v: 90 },
];

const revenueData = [
  { name: 'Jan', revenue: 42000, expenses: 28000 },
  { name: 'Feb', revenue: 53000, expenses: 32000 },
  { name: 'Mar', revenue: 47000, expenses: 29000 },
  { name: 'Apr', revenue: 61000, expenses: 35000 },
  { name: 'May', revenue: 55000, expenses: 31000 },
  { name: 'Jun', revenue: 67000, expenses: 38000 },
  { name: 'Jul', revenue: 72000, expenses: 40000 },
];

const statIcons = [<FiUsers />, <FiShoppingBag />, <MdTrendingUp />, <FiRefreshCw />];

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="p-6 space-y-6">
      {/* Hero Banner */}
      <div
        className="relative rounded-3xl p-8 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${currentColor} 0%, #a855f7 60%, #ec4899 100%)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-sm font-medium mb-1">Total Revenue</p>
            <p className="text-white text-5xl font-extrabold tracking-tight">$63,448</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <MdTrendingUp /> +23% from last month
              </span>
            </div>
          </div>
          <div className="w-full md:w-64 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparkData}>
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#fff" strokeWidth={2.5} fill="url(#sparkGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {earningData.map((item, i) => (
          <div key={item.title} className="stat-card bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-card border border-gray-50 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                {statIcons[i]}
              </div>
              <span className={`text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-full ${
                item.percentage.startsWith('+')
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-red-500 bg-red-50'
              }`}>
                {item.percentage.startsWith('+') ? <MdTrendingUp /> : <MdTrendingDown />}
                {item.percentage}
              </span>
            </div>
            <p className="text-2xl font-extrabold text-gray-800 dark:text-white mt-4">{item.amount}</p>
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-card border border-gray-50 dark:border-gray-800">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">Revenue Overview</p>
              <p className="text-sm text-gray-400 mt-0.5">Monthly revenue vs expenses</p>
            </div>
            <select className="text-sm bg-gray-50 dark:bg-gray-800 border-0 rounded-xl px-3 py-2 text-gray-500 dark:text-gray-400 outline-none">
              <option>Last 7 months</option>
              <option>Last year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={currentColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={currentColor} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontSize: '13px' }}
                formatter={(v) => [`$${v.toLocaleString()}`, '']}
              />
              <Area type="monotone" dataKey="revenue" stroke={currentColor} strokeWidth={2.5} fill="url(#revGrad)" name="Revenue" />
              <Area type="monotone" dataKey="expenses" stroke="#a855f7" strokeWidth={2.5} fill="url(#expGrad)" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: currentColor }} />
              <span className="text-xs text-gray-500">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-500">Expenses</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-card border border-gray-50 dark:border-gray-800">
          <p className="text-lg font-bold text-gray-800 dark:text-white mb-5">Recent Transactions</p>
          <div className="space-y-4">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ color: item.iconColor, background: item.iconBg }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
                <p className={`text-sm font-bold flex-shrink-0 ${item.pcColor === 'green-600' ? 'text-emerald-500' : 'text-red-400'}`}>
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly stats + Product performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Stats */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-card border border-gray-50 dark:border-gray-800">
          <p className="text-lg font-bold text-gray-800 dark:text-white mb-5">Weekly Highlights</p>
          <div className="space-y-4">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0"
                  style={{ background: item.iconBg }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
                <p className={`text-sm font-bold ${item.pcColor === 'green-600' ? 'text-emerald-500' : 'text-red-400'}`}>
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-card border border-gray-50 dark:border-gray-800">
          <p className="text-lg font-bold text-gray-800 dark:text-white mb-5">Product Performance</p>
          <div className="space-y-4">
            {productsPerformance.map((item) => (
              <div key={item.title} className="flex gap-4 items-center">
                <img className="h-14 w-14 rounded-2xl object-cover flex-shrink-0" src={item.image} alt={item.title} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{item.title}</p>
                  <p className="text-xs text-gray-400 mb-2">{item.desc}</p>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all duration-700"
                      style={{
                        width: item.itemSold,
                        background: `linear-gradient(90deg, ${currentColor}, #a855f7)`,
                      }}
                    />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">{item.itemSold}</p>
                  <p className="text-xs text-gray-400">{item.earningAmount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
