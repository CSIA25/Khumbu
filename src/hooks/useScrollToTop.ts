import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This custom hook ensures that the window scrolls to the top on every page change.
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default useScrollToTop;