import React, { useEffect, useState } from "react";

interface AppSpinnerProps {
  isPending: boolean;
  message?: string;
}

const AppSpinner: React.FC<AppSpinnerProps> = ({ isPending, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isPending) {
      setVisible(true);
    } else {
      timeoutId = setTimeout(() => setVisible(false), 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isPending]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#201610]/20 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-[#f0dfc8] border-t-[#8a4027]" />
        {message ? <p className="text-[#fffaf2] text-sm font-medium">{message}</p> : null}
      </div>
    </div>
  );
};

export default AppSpinner;
