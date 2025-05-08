import { ReactNode, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface AppDialogInterface {
  title: string;
  children: ReactNode;
  onClose: () => void;
  placement?: "CENTER" | "RIGHT";
}

function AppDialog({
  children,
  title,
  onClose,
  placement = "CENTER",
}: AppDialogInterface) {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const openTimeout = setTimeout(() => {
      setIsOpening(true);
    }, 30);
    return () => clearTimeout(openTimeout);
  }, []);

  function handleCloseClick() {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // matches animation time
  }

  const animationClass =
    placement === "CENTER"
      ? isClosing
        ? "scale-75 opacity-0"
        : isOpening
        ? "scale-100 opacity-100"
        : "scale-75 opacity-0"
      : isClosing
      ? "translate-x-10 opacity-0"
      : isOpening
      ? "translate-x-0 opacity-100"
      : "translate-x-10 opacity-0";

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 bg-foreground/50 backdrop-blur-3xl transition-opacity duration-300 h-screen ${
        isClosing ? "opacity-0" : "opacity-100"
      } ${placement === "CENTER" ? "flex items-center justify-center" : "flex justify-end"}`}
    >
      <div
        className={`bg-background flex flex-col gap-3 transform transition-all duration-300 ${
          placement === "CENTER"
            ? "min-w-[20vw] min-h-[20vh] rounded-md"
            : "h-full w-fit max-w-[90vw]"
        } ${animationClass}`}
      >
        <div className="w-full flex items-center justify-between px-4 py-2 bg-foreground/5">
          <div className="w-full text-sm lg:text-xl font-semibold text-foreground">
            {title}
          </div>
          <div
            className="border rounded-full border-foreground cursor-pointer"
            onClick={handleCloseClick}
          >
            <IoMdClose className="text-foreground w-6 h-6 p-1" />
          </div>
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default AppDialog;
