import { MotionProps } from 'framer-motion';

export const animateSlide = ({ width, duration = 0.2 }: { width: string; duration?: number }): Partial<MotionProps> => {
  return {
    initial: { right: `-${width}`, visibility: 'hidden' },
    animate: { right: 0, visibility: 'visible' },
    exit: { right: `-${width}`, visibility: 'hidden' },
    transition: { duration },
  };
};
