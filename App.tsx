import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardStats } from './components/DashboardStats';
import { ChatInterface } from './components/ChatInterface';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <DashboardStats />;
      case ViewState.CHAT:
        return <ChatInterface />;
      case ViewState.SETTINGS:
        return (
          <div className="flex items-center justify-center h-full text-slate-500">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-300 mb-2">Settings Unavailable</h2>
              <p>This module is under maintenance in the preview build.</p>
            </div>
          </div>
        );
      default:
        return <DashboardStats />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100">
      {/* Sticky Sidebar */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative flex flex-col">
        {/* Top bar mobile trigger would go here in fully responsive production app */}
        
        {/* Content Scroller */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl" />
        </div>
      </main>
    </div>
  );
};

export default App;