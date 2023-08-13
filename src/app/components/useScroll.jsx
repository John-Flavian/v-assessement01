import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const useScroll = (docRef) => {
  useEffect(() => {
    if (docRef.current) {
      const scrollbar = Scrollbar.init(docRef.current, {
        damping: 0.2, // Adjust the damping effect
        thumbMinSize: 5, // Set a minimum size for the thumb
        renderByPixels: true, // Ensure pixel-based scrolling
        alwaysShowTracks: false, // Show scrollbar tracks always
        continuousScrolling: true, // Enable continuous scrolling
      });
      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, [docRef]);
};

export default useScroll;
