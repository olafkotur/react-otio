import { useEffect, useState } from 'react';

export const useBreakpoints = ({
  breakpoints,
}: {
  breakpoints: { mobile: number; tablet: number; desktop: number };
}) => {
  const { mobile, tablet, desktop } = breakpoints;

  const [isMobile, setIsMobile] = useState(window.innerWidth < mobile);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= mobile && window.innerWidth < desktop);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktop);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobile);
      setIsTablet(window.innerWidth >= mobile && window.innerWidth < desktop);
      setIsDesktop(window.innerWidth >= desktop);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
