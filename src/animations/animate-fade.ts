import { MotionProps } from 'framer-motion';

export const animateFade = ({ duration = 0.2 }: { duration?: number }): Partial<MotionProps> => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration },
  };
};
