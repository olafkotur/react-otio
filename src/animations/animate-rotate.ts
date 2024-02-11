import { MotionProps } from 'framer-motion';

export const animateRotate = ({
  ease = 'linear',
  repeat = Infinity,
  duration = 1,
  degrees = 360,
}: {
  ease?: 'linear' | 'easeInOut';
  repeat?: number;
  duration?: number;
  degrees?: number;
}): Partial<MotionProps> => {
  return {
    initial: { rotate: 0 },
    animate: { rotate: degrees },
    transition: { type: 'keyframes', repeat, duration, ease: ease },
  };
};
