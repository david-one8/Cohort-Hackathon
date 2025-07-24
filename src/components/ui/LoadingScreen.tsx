import React from 'react';
import MagicLoader from './MagicLoader';
import './MagicLoader.css';

interface LoadingScreenProps {
  isLoading: boolean;
  text?: string;
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading, 
  text = "Loading...",
  onLoadingComplete 
}) => {
  const [shouldRender, setShouldRender] = React.useState(isLoading);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && shouldRender) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setFadeOut(false);
        onLoadingComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    } else if (isLoading && !shouldRender) {
      setShouldRender(true);
    }
  }, [isLoading, shouldRender, onLoadingComplete]);

  if (!shouldRender) return null;

  return (
    <div className={`loading-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <MagicLoader size={100} color="#3b82f6" />
      <div className="loading-text">{text}</div>
    </div>
  );
};

export default LoadingScreen;