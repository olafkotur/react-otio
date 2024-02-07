import { HTMLMotionProps } from 'framer-motion';

export const animateVisibility = ({
  isVisible,
  display = 'flex',
}: {
  isVisible: boolean;
  display?: string;
}): HTMLMotionProps<'div'> => {
  return {
    initial: { display: 'none' },
    animate: { display: isVisible ? display : 'none' },
  };
};
