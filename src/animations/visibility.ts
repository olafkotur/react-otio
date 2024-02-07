import { HTMLMotionProps } from 'framer-motion';

export const Visibility = ({
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
