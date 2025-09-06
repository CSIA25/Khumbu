import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This timeout gives the browser a brief moment to render the new page
    // before attempting to scroll. This is crucial for pages with heavy content
    // like images, preventing the scroll from happening before the content is in place.
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    // Cleanup the timer if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default useScrollToTop;