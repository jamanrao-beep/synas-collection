'use client';

import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      {/* The Popup Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '220px',
          border: '1px solid #eaeaea',
          animation: 'slideUp 0.2s ease-out'
        }}>
          <h3 style={{ margin: 0, fontSize: '12px', fontFamily: 'var(--font-cinzel)', letterSpacing: '0.15em', borderBottom: '1px solid #eaeaea', paddingBottom: '12px', color: '#8A6A35', textAlign: 'center' }}>
            CHAT WITH US
          </h3>
          <a 
            href="https://wa.me/15085079623" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', textDecoration: 'none', color: '#2A170C', fontFamily: 'var(--font-raleway)', fontWeight: 600, transition: 'color 0.2s ease' }}
          >
            <span style={{ fontSize: '20px' }}>🇺🇸</span> US WhatsApp
          </a>
          <a 
            href="https://wa.me/918976029638" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', textDecoration: 'none', color: '#2A170C', fontFamily: 'var(--font-raleway)', fontWeight: 600, transition: 'color 0.2s ease' }}
          >
            <span style={{ fontSize: '20px' }}>🇮🇳</span> India WhatsApp
          </a>
        </div>
      )}

      {/* The Main Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Menu"
        style={{
          backgroundColor: '#25d366',
          color: '#ffffff',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M12.031 0C5.405 0 0 5.405 0 12.031c0 2.628.847 5.093 2.33 7.086L.605 23.36l4.398-1.748c1.942 1.344 4.305 2.128 6.837 2.128 6.626 0 12.031-5.405 12.031-12.031S18.657 0 12.031 0zm0 21.614c-2.228 0-4.298-.737-5.962-1.97l-.427-.318-3.081 1.224 1.224-3.081-.318-.427c-1.233-1.664-1.97-3.734-1.97-5.962 0-5.461 4.444-9.905 9.905-9.905s9.905 4.444 9.905 9.905-4.444 9.905-9.905 9.905zm5.437-7.447c-.298-.149-1.761-.871-2.034-.971-.274-.1-.473-.149-.672.149-.199.298-.771.971-.945 1.17-.174.199-.348.224-.647.075-.298-.149-1.258-.464-2.395-1.478-.884-.79-1.482-1.766-1.656-2.064-.174-.298-.019-.46.13-.609.135-.135.298-.348.448-.522.149-.174.199-.298.298-.498.1-.199.05-.373-.025-.522-.075-.149-.672-1.62-.921-2.218-.244-.582-.493-.503-.672-.513-.174-.01-.373-.01-.572-.01-.199 0-.522.075-.796.373-.274.298-1.045 1.021-1.045 2.489s1.07 2.887 1.22 3.086c.149.199 2.105 3.216 5.1 4.509.712.308 1.267.493 1.7.632.715.228 1.365.195 1.88.118.577-.086 1.761-.722 2.01-1.42.249-.697.249-1.294.174-1.42-.075-.126-.274-.201-.572-.35z"/>
        </svg>
      </button>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
