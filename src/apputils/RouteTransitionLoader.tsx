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
    <div className="pointer-events-none fixed inset-0 z-[500] flex items-center justify-center bg-[#f5efe4]/38 backdrop-blur-[1.5px]">
      <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-[#d8c0a1] border-t-[#8a4027]" />
    </div>
  );
}

export default RouteTransitionLoader;
