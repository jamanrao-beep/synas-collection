'use client';

import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="https://wa.me/15085079623" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25d366',
        color: '#ffffff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 9999,
        transition: 'transform 0.2s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M12.031 0C5.405 0 0 5.405 0 12.031c0 2.628.847 5.093 2.33 7.086L.605 23.36l4.398-1.748c1.942 1.344 4.305 2.128 6.837 2.128 6.626 0 12.031-5.405 12.031-12.031S18.657 0 12.031 0zm0 21.614c-2.228 0-4.298-.737-5.962-1.97l-.427-.318-3.081 1.224 1.224-3.081-.318-.427c-1.233-1.664-1.97-3.734-1.97-5.962 0-5.461 4.444-9.905 9.905-9.905s9.905 4.444 9.905 9.905-4.444 9.905-9.905 9.905zm5.437-7.447c-.298-.149-1.761-.871-2.034-.971-.274-.1-.473-.149-.672.149-.199.298-.771.971-.945 1.17-.174.199-.348.224-.647.075-.298-.149-1.258-.464-2.395-1.478-.884-.79-1.482-1.766-1.656-2.064-.174-.298-.019-.46.13-.609.135-.135.298-.348.448-.522.149-.174.199-.298.298-.498.1-.199.05-.373-.025-.522-.075-.149-.672-1.62-.921-2.218-.244-.582-.493-.503-.672-.513-.174-.01-.373-.01-.572-.01-.199 0-.522.075-.796.373-.274.298-1.045 1.021-1.045 2.489s1.07 2.887 1.22 3.086c.149.199 2.105 3.216 5.1 4.509.712.308 1.267.493 1.7.632.715.228 1.365.195 1.88.118.577-.086 1.761-.722 2.01-1.42.249-.697.249-1.294.174-1.42-.075-.126-.274-.201-.572-.35z"/>
        </svg>
    </a>
  );
}
