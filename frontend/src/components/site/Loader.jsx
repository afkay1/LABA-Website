import { motion } from "framer-motion";

// Page loader: LÀ·BA logo fades/scales in. Unmounted instantly by the parent
// (no exit animation) so it can never get stuck if the clock is throttled.
export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-laba-secondary"
      data-testid="page-loader"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="font-display text-6xl md:text-8xl tracking-tight text-white">
          L<span className="text-laba-accent">À</span>
          <span className="text-laba-accent px-1">·</span>BA
        </div>
        <motion.div
          className="mt-4 h-px bg-laba-accent"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <div className="mt-3 font-body text-xs tracking-[0.5em] uppercase text-muted-white">
          Art of Dining
        </div>
      </motion.div>
    </div>
  );
}
