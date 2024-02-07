import { HTMLMotionProps } from 'framer-motion';

export const ChangeColor = ({
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
