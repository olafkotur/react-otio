import { HTMLMotionProps } from 'framer-motion';

export const animateChangeColor = ({
  color,
  duration = 0.25,
}: {
  color: string;
  duration?: number;
}): HTMLMotionProps<'div'> => {
  return {
    animate: { color },
    transition: { duration },
  };
};
