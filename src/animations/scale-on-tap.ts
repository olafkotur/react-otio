import { HTMLMotionProps } from 'framer-motion';

export const ScaleOnTap = ({ depth = 0.99 }: { depth?: number }): HTMLMotionProps<'div'> => {
  return {
    whileTap: { scale: depth },
  };
};
