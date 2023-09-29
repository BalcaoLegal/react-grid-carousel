import { useEffect, useCallback, useState, useMemo } from 'react';

type BreakpointSetting = {
    breakpoint: number;
    cols?: number,
    rows?: number,
    gap?: number,
    loop?: boolean,
    autoplay?: number
  }

export type UseResponsiveLayoutProps = {
    breakpointList?: BreakpointSetting[];
}

type CurrentBreakpointSetting = BreakpointSetting | undefined;

 /**
 * Hook that returns the current breakpoint setting based on the window width.
 * @param {UseResponsiveLayoutProps} props - The props for the hook.
 * @returns {CurrentBreakpointSetting} - The current breakpoint setting.
 */
const useResponsiveLayout = (props: UseResponsiveLayoutProps = {}): CurrentBreakpointSetting => {

    const [currentBreakpointSetting, setCurrentBreakpointSetting] = useState<CurrentBreakpointSetting>();
    
    const sortedBreakpointList = useMemo(() => {
      const breakpoints = [...props.breakpointList ?? []];
      breakpoints.sort((a, b) => b.breakpoint - a.breakpoint);
      return breakpoints;
    }, [props.breakpointList]);
    
    const handleResize = useCallback(() => {

      const windowWidth = window.innerWidth;
      let matchedSetting;

      sortedBreakpointList.some(setting => {
        if (windowWidth <= setting.breakpoint) {
          matchedSetting = setting;
          return true;
        }
        return false;
      });

      setCurrentBreakpointSetting(matchedSetting);

    }, [sortedBreakpointList]);

    useEffect(() => {

      if (props.breakpointList?.length) {
        handleResize();
        const resizeHandler = () => handleResize();
        window.addEventListener("resize", resizeHandler);

        return () => {
          window.removeEventListener("resize", resizeHandler);
        }

      }
    }, [props.breakpointList, handleResize]);

    return currentBreakpointSetting;

  }

export default useResponsiveLayout