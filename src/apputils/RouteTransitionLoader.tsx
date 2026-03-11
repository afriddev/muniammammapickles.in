import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function RouteTransitionLoader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setVisible(true);
    const timeoutId = window.setTimeout(() => {
      setVisible(false);
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[500] flex items-center justify-center bg-[#f5efe4]/55 backdrop-blur-[2px]">
      <div className="flex items-center gap-4 border border-[#b7a189] bg-[#f7f1e8] px-5 py-4">
        <div className="h-6 w-6 animate-spin border border-[#d79b45] border-t-[#201610]" />
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#6a4c37]">
          Loading
        </p>
      </div>
    </div>
  );
}

export default RouteTransitionLoader;
