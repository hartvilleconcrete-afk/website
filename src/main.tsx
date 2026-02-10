import React from 'react';
import ReactDOM from 'react-dom/client';
import BiddioLogo from './components/BiddioLogo';

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <h1 style={{ color: '#f5a623', marginBottom: '2rem' }}>Biddio Logo Component Demo</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Default (Icon Only)</h2>
          <BiddioLogo />
        </div>

        <div>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Small Size</h2>
          <BiddioLogo className="w-8 h-8" />
        </div>

        <div>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Large Size</h2>
          <BiddioLogo className="w-24 h-24" />
        </div>

        <div>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>With Text</h2>
          <BiddioLogo showText={true} />
        </div>

        <div>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>With Text - Custom Size</h2>
          <BiddioLogo showText={true} className="w-16 h-16" textClass="text-3xl" />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
