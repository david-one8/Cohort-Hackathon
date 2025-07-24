import React from 'react';
import './MagicLoader.css';

interface MagicLoaderProps {
  size?: number;
  color?: string;
}

const MagicLoader: React.FC<MagicLoaderProps> = ({ 
  size = 80, 
  color = '#3b82f6' 
}) => {
  return (
    <div className="magic-loader" style={{ '--size': `${size}px`, '--color': color } as React.CSSProperties}>
      <div className="magic-loader-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="magic-loader-dot"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default MagicLoader;