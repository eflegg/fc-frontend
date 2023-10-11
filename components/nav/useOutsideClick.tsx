import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

    // useEffect(() => {
    //   const checkIfClickedOutside = (e: any) => {
    //     // If the menu is open and the clicked target is not within the menu,
    //     // then close the menu
    //     console.log('e: ', e.target);
    //     if (subnav && ref.current && !ref.current.contains(e.target)) {
    //       setSubnav(null);
    //     }
    //   };
    //   document.addEventListener("mousedown", checkIfClickedOutside);
    //   return () => {
    //     // Cleanup the event listener
    //     document.removeEventListener("mousedown", checkIfClickedOutside);
    //   };
    // }, [subnav]);