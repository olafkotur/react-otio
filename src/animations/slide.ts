import { HTMLMotionProps } from 'framer-motion';

export const Slide = ({ width, duration = 0.2 }: { width: string; duration?: number }): HTMLMotionProps<'div'> => {
  return {
    initial: { right: `-${width}`, visibility: 'hidden' },
    animate: { right: 0, visibility: 'visible' },
    exit: { right: `-${width}`, visibility: 'hidden' },
    transition: { duration },
  };
};
