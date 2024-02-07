import { HTMLMotionProps } from 'framer-motion';

export const Rotate = ({
  repeat = Infinity,
  duration = 1,
  degrees = 360,
}: {
  repeat?: number;
  duration?: number;
  degrees?: number;
}): HTMLMotionProps<'div'> => {
  return {
    initial: { rotate: 0 },
    animate: { rotate: degrees },
    transition: { type: 'keyframes', repeat, duration },
  };
};
