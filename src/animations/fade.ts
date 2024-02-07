import { HTMLMotionProps } from 'framer-motion';

export const Fade = ({ duration = 0.15 }: { duration?: number }): HTMLMotionProps<'div'> => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration },
  };
};
