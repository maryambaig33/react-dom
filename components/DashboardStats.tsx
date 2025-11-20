import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { INITIAL_STATS } from '../constants';
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', value: 4000, uv: 2400 },
  { name: 'Tue', value: 3000, uv: 1398 },
  { name: 'Wed', value: 2000, uv: 9800 },
  { name: 'Thu', value: 2780, uv: 3908 },
  { name: 'Fri', value: 1890, uv: 4800 },
  { name: 'Sat', value: 2390, uv: 3800 },
  { name: 'Sun', value: 3490, uv: 4300 },
];

export const DashboardStats: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Overview</h2>
        <p className="text-slate-400">Platform performance and AI usage metrics.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {INITIAL_STATS.map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-5 rounded-2xl hover:border-indigo-500/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              <div className={`p-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 rounded-2xl h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              Token Usage Activity
            </h3>
            <select className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg p-1.5 outline-none focus:border-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                itemStyle={{ color: '#818cf8' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
          <div className="space-y-6">
            {['API Latency', 'Database Load', 'Memory Usage', 'Storage'].map((item, i) => (
              <div key={item}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">{item}</span>
                  <span className="text-white font-medium">{85 - (i * 12)}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${85 - (i * 12)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <p className="text-indigo-300 text-sm">
              System is running optimally. No incidents reported in the last 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};