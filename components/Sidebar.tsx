import React from 'react';
import { LayoutDashboard, MessageSquare, Settings, LogOut, Zap } from 'lucide-react';
import { ViewState } from '../types';
import { clsx } from 'clsx';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
    { id: ViewState.CHAT, icon: MessageSquare, label: 'AI Assistant' },
    { id: ViewState.SETTINGS, icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col backdrop-blur-xl transition-all duration-300">
      <div className="p-6 flex items-center justify-center lg:justify-start gap-3 border-b border-slate-800">
        <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="hidden lg:block font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Liwisi
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={clsx(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20" 
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              )}
            >
              <Icon className={clsx("w-5 h-5", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
              <span className="hidden lg:block font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white hidden lg:block" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="hidden lg:block font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};