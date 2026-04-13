import React from 'react';

const Dashboard = ({ onViewChange }) => {
  return (
    <div className="dashboard-layout" style={{ gridTemplateColumns: '1fr', padding: '2rem 1rem' }}>
      <main className="dashboard-main" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Hero Section */}
        <header className="dashboard-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="gradient-text" style={{ fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-2px', marginBottom: '1.5rem' }}>
            NAXA_WEB
          </h1>
          <div style={{ marginBottom: '2.5rem' }}>
            <img 
              src="/logo.png" 
              alt="NAXA Logo" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '24px',
                boxShadow: '0 0 40px rgba(0, 210, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }} 
            />
          </div>
          
          <div className="value-proposition" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--accent-glow)', fontSize: '2rem', marginBottom: '1.5rem' }}>The "All-in-One" Value Proposition</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', textAlign: 'justify' }}>
              I build autonomous, AI-integrated digital platforms that combine the immersive power of cinematic video graphics with the logic of a full-stack engine. Unlike traditional static websites, my pages are living ecosystems that use Generative AI to personalize content in real-time and self-optimize for conversions. By handling everything from high-end visual storytelling to complex backend architecture, I provide a seamless, high-performance bridge between your brand and your customers, ensuring 24/7 engagement through intelligent automation.
            </p>
          </div>
        </header>

        {/* High-Value Points Section */}
        <section style={{ marginBottom: '5rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--text-primary)' }}>Why My Skillset is High-Value</h3>
          <div className="capabilities-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem'
          }}>
            <div className="capability-card" style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)', transition: 'transform 0.3s ease' }}>
              <h4 style={{ color: 'var(--accent-glow)', marginBottom: '1rem', fontSize: '1.2rem' }}>The Power of Video Graphics</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>In 2026, users have zero patience for "flat" design. By integrating motion UI and video backgrounds, you increase dwell time and brand memorability. You aren't just giving them a page; you're giving them an experience.</p>
            </div>
            
            <div className="capability-card" style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--accent-glow)', marginBottom: '1rem', fontSize: '1.2rem' }}>AI Integration (The Intelligence)</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>You can offer "Agentic Journeys." Instead of a user searching for a product, your AI-integrated sites can predict what they want based on history and location, essentially "flattening the funnel" from 5 clicks down to 1.</p>
            </div>
            
            <div className="capability-card" style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--accent-glow)', marginBottom: '1rem', fontSize: '1.2rem' }}>Full-Stack Capability</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Because you control the Front-end (what they see) and the Back-end (the data), you can build features like custom dashboards, secure member portals, and real-time data processing that "drag-and-drop" builders simply cannot handle.</p>
            </div>
            
            <div className="capability-card" style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--accent-glow)', marginBottom: '1rem', fontSize: '1.2rem' }}>Performance & SEO</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>As a full-stack pro, you can ensure that even with heavy video and AI, the site is Server-Side Rendered (SSR) for lightning-fast speeds, which is a major ranking factor in 2026.</p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section style={{ marginBottom: '5rem', background: 'var(--glass-bg)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem' }}>Comparison for Your Clients</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>Feature</th>
                  <th style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>Standard Web Designer</th>
                  <th style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>NAXA_WEB (AI + Full-Stack + Video)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>Visuals</td>
                  <td style={{ padding: '1.5rem' }}>Static images & text</td>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>Immersive video & 3D motion graphics</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>User Flow</td>
                  <td style={{ padding: '1.5rem' }}>Linear (same for everyone)</td>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>Predictive & Personalized (AI-driven)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>Intelligence</td>
                  <td style={{ padding: '1.5rem' }}>Basic contact form</td>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>24/7 AI Virtual Assistant & NLP</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>Performance</td>
                  <td style={{ padding: '1.5rem' }}>Basic templates</td>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>Custom architecture & "Self-healing" UX</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>Goal</td>
                  <td style={{ padding: '1.5rem' }}>"Show information"</td>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-glow)' }}>"Drive autonomous growth"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA and Footer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '4rem' }}>
          <button 
            className="btn-submit" 
            style={{ padding: '1.2rem 4rem', fontSize: '1.3rem', marginBottom: '3rem', boxShadow: '0 0 30px rgba(0, 210, 255, 0.4)' }}
            onClick={() => onViewChange('home')}
          >
            MAKE YOUR WEB
          </button>
          
          <div style={{ textAlign: 'center', opacity: 0.8 }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Advanced autonomous capabilities for your web ecosystem.
            </p>
            
            <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>NAXAWEB@GMAIL.COM</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>naxa_web</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
