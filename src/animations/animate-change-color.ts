import { MotionProps } from 'framer-motion';

export const animateChangeColor = ({
  color,
  duration = 0.25,
}: {
  color: string;
  duration?: number;
}): Partial<MotionProps> => {
  return {
    animate: { color },
    transition: { duration },
  };
};
