import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, Gamepad2 } from 'lucide-react';

export type GameExistsDialogProps = {
  /** Controls visibility of the dialog */
  open: boolean;
  /** Called when the user chooses to CONTINUE the existing game */
  onContinue: () => void;
  /** Called when the user chooses to CREATE NEW (overwrite current) */
  onOverwrite: () => void;
  /** Called when the dialog is closed via outside click, ESC, or Cancel */
  onClosed: () => void;
};

export default function GameExistsDialog({
  open,
  onContinue,
  onOverwrite,
  onClosed,
}: GameExistsDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={(open) => {
        if (!open) onClosed();
      }}
    >
      <AlertDialogContent className="glass-dark border border-white/10 shadow-2xl max-w-md rounded-2xl">
        <AlertDialogHeader className="gap-3">
          <div className="flex items-center gap-3">
            <AnimatePresence mode="popLayout">
              {open && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"
                >
                  <Gamepad2 className="h-6 w-6  text-white/90" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="space-y-1">
              <AlertDialogTitle className="leading-tight font-semibold tracking-tight text-white/95">
                Game already exists
              </AlertDialogTitle>
              <AlertDialogDescription className="text-white/75">
                We found an existing game in this browser session. What would
                you like to do?
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <div className="mt-1 grid gap-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 p-3">
            <div className="mt-0.5">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-sm text-muted-foreground text-white/50">
              <span className="font-medium">Creating a new game</span> will
              overwrite the current one in this browser session. This cannot be
              undone.
            </p>
          </div>
        </div>

        <AlertDialogFooter className="sm:justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
              onClick={onContinue}
            >
              Continue existing
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <AlertDialogCancel className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 hover:text-white/90">
              Cancel
            </AlertDialogCancel>
            <Button
              className="rounded-xl bg-rose-500/80 text-white/90 hover:bg-rose-500/100 border border-white/20"
              onClick={onOverwrite}
            >
              Create new & overwrite
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
