import { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  function handleDialogChange(val: boolean) {
    if (!val) {
      setOpen(false);
      setTimeout(() => onClose(), 100);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogOverlay className="bg-foreground/5 backdrop-blur-sm z-[999] p-0 m-0" />
      <DialogContent 
        className={`z-[999] p-0 m-0 ${
          placement === "RIGHT"
            ? "ml-auto h-full w-fit max-w-[90vw]"
            : "w-fit min-h-[20vh] rounded-md"
        }`}
      >
        <DialogHeader className="bg-foreground/5 p-0 m-0">
          <DialogTitle className="text-sm lg:text-xl font-semibold text-foreground p-2">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="p-3 m-4 -mt-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default AppDialog;
