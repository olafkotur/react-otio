import { HTMLMotionProps } from 'framer-motion';

export const animateScaleOnTap = ({ depth = 0.99 }: { depth?: number }): HTMLMotionProps<'div'> => {
  return {
    whileTap: { scale: depth },
  };
};
