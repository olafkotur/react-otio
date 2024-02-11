import { MotionProps } from 'framer-motion';

export const animateScaleOnTap = ({ depth = 0.99 }: { depth?: number }): Partial<MotionProps> => {
  return {
    whileTap: { scale: depth },
  };
};
