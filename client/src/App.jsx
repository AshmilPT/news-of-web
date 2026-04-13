import React, { useState } from 'react';
import Header from './components/Header';
import PurchaseForm from './components/PurchaseForm';
import Dashboard from './components/Dashboard';

function App() {
  const [view, setView] = useState('dashboard'); // 'home' or 'dashboard'

  return (
    <div className="app-container">
      <Header 
        onViewChange={setView} 
        currentView={view} 
      />
      <main className="main-content">
        {view === 'home' ? (
          <div className="centered-section">
            <PurchaseForm onViewChange={setView} />
          </div>
        ) : (
          <Dashboard onViewChange={setView} />
        )}
      </main>
    </div>
  );
}

export default App;
