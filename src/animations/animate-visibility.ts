import { MotionProps } from 'framer-motion';

export const animateVisibility = ({
  isVisible,
  display = 'flex',
}: {
  isVisible: boolean;
  display?: string;
}): Partial<MotionProps> => {
  return {
    initial: { display: 'none' },
    animate: { display: isVisible ? display : 'none' },
  };
};
