import React, { useState, useEffect } from 'react';

interface AppSpinnerProps {
  isPending: boolean;
}

const AppSpinner: React.FC<AppSpinnerProps> = ({ isPending }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId: number;
    let timeoutId: number;

    if (isPending) {
      setProgress(0);
      intervalId = window.setInterval(() => {
        setProgress(prev => Math.min(prev + Math.random() * 10, 90));
      }, 200);
    } else {
      setProgress(100);
      timeoutId = window.setTimeout(() => setProgress(0), 300);
    }

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isPending]);

  if (progress === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] h-[100vw] w-[100vw]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isPending && (
        <div className="flex items-center justify-center h-full">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default AppSpinner;