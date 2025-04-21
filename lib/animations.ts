// Reusable animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }
};

export const parallaxScroll = (speed: number = 0.5) => ({
  initial: { y: 0 },
  animate: {
    y: [-20, 20],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 2,
      ease: "easeInOut"
    }
  }
});