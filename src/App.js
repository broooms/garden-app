import React from 'react';
import './App.css';
import RequirementsDashboard from './components/RequirementsDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header-mini">
        <h1>Garden App</h1>
        <p>Your digital companion for garden planning and management</p>
      </header>
      <main>
        <RequirementsDashboard />
      </main>
      <footer>
        <p>Garden App - Phase 1 Planning</p>
      </footer>
    </div>
  );
}

export default App;