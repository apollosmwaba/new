import { useEffect, useState } from 'react';
import logo from '../../public/images/assets/logo.png';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 flex flex-col items-center justify-center">
      {/* Circular loader with logo */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 border-2 border-brand-700 rounded-full">
          <div className="absolute inset-0 border-2 border-transparent border-t-accent rounded-full animate-spin" style={{ animationDuration: '1.5s' }} />
        </div>
        {/* Middle spinning ring (reverse) */}
        <div className="absolute inset-2 border-2 border-brand-700 rounded-full">
          <div className="absolute inset-0 border-2 border-transparent border-b-accent rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        </div>
        {/* Inner pulsing ring */}
        <div className="absolute inset-4 border-2 border-accent/30 rounded-full animate-pulse" />
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" />
            <img src={logo} alt="Pillar of Stone Logo" className="w-14 h-14 sm:w-18 sm:h-18 relative z-10" />
          </div>
        </div>
      </div>
      
      {/* Text with fade-in animation */}
      <div className="text-center space-y-2">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider animate-[fadeIn_1s_ease-out]">
          Pillar of Stone
        </h1>
        <p className="text-accent text-lg sm:text-xl font-semibold tracking-[0.3em] animate-[fadeIn_1s_ease-out_0.3s_both]">
          ZAMBIA
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-48 sm:w-64 h-1 bg-brand-700 rounded-full mt-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="text-brand-400 text-sm mt-4 animate-[fadeIn_1s_ease-out_0.5s_both]">
        Loading experience...
      </p>
    </div>
  );
}
