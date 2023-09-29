import {
  Children,
  CSSProperties,
  FC,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import useRefProp from '../hooks/useRefProp';
import ArrowButton from './ArrowButton';
import Dot, {DotProps} from './Dots';
import useResponsiveLayout, { UseResponsiveLayoutProps } from '../hooks/responsiveLayoutHook';
import { addResizeHandler, removeResizeHandler } from '../utils/resizeListener';



export type CarouselProps = {
  cols?: number;
  rows?: number;
  gap?: number;
  loop?: boolean;
  scrollable?: boolean;
  scrollSnap?: boolean;
  hideArrow?: boolean;
  arrowLeft?: ReactNode;
  arrowRight?: ReactNode;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  onPageChanged?: (page: number) => void;
  onTotalPagesChanged?: (page: number) => void;
  startPage?: number;
  children?: ReactNode;
  showDots?: boolean;
  responsiveLayout?: UseResponsiveLayoutProps;
  mobileBreakpoint?: number;
  autoplay?: number;
} & Pick<DotProps, 'dot' | 'dotColorActive' | 'dotColorInactive'>;

const Container = styled.div`
  position: relative;
`;

const RailWrapper = styled.div<Pick<CarouselProps, 'scrollSnap' | 'scrollable' | 'gap' | 'showDots' | 'mobileBreakpoint'>>`
  overflow: hidden;
  margin: ${({ showDots }) => (showDots ? '0 20px 15px 20px' : '0 20px')};

  @media screen and (max-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint}px) {
    overflow-x: auto;
    margin: 0;
    scroll-snap-type: ${({ scrollSnap }) => (scrollSnap ? 'x mandatory' : '')};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Rail = styled.div<Pick<CarouselProps, 'gap' | 'rows' | 'cols' | 'mobileBreakpoint'> & {page: number; currentPage: number}>`
  display: grid;
  grid-column-gap: ${({ gap }) => `${gap}px`};
  position: relative;
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  grid-template-columns: ${({ page }) => `repeat(${page}, 100%)`};
  transform: ${({ currentPage, gap }) =>
    `translateX(calc(${-100 * currentPage}% - ${(gap ?? 5) * currentPage}px))`};

  @media screen and (max-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint}px) {
    padding-left: ${({ gap }) => `${gap}px`};
    grid-template-columns: ${({ page }) => `repeat(${page}, 90%)`};
    grid-column-gap: ${({ cols, rows, gap }) =>
      `calc(${((cols ?? 1) * (rows ?? 1) - 1) * 90}% + ${(cols ?? 1) * (rows ?? 1) * (gap ?? 5)}px)`};
    transform: translateX(0);
  }
`;

const Item = styled.div<Pick<CarouselProps, 'scrollSnap'>>`
  scroll-snap-align: ${({scrollSnap}) => (scrollSnap ? 'start' : '')};
`;

const ItemSet = styled.div<Pick<CarouselProps, 'gap' | 'rows' | 'cols' | 'mobileBreakpoint'>>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({ gap }) => `${gap}px`};

  @media screen and (max-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint}px) {
    grid-template-columns: ${({ cols, rows }) =>
      `repeat(${(cols ?? 1) * (rows ?? 1)}, 100%)`};
    grid-template-rows: 1fr;

    &:last-of-type > ${/* sc-sel */ Item}:last-of-type {
      padding-right: ${({ gap }) => `${gap}px`};
      margin-right: ${({ gap }) => `-${gap}px`};
    }
  }
`;

const Dots = styled.div<Pick<CarouselProps, 'mobileBreakpoint'>>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -12px;
  height: 10px;
  width: 100%;
  line-height: 10px;
  text-align: center;

  @media screen and (max-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint}px) {
    display: none;
  }
`;

const CAROUSEL_ITEM = 'CAROUSEL_ITEM';

function Carousel({
  cols: colsProp = 2,
  rows: rowsProp = 1,
  gap: gapProp = 5,
  loop: loopProp = false,
  scrollable = false,
  scrollSnap = true,
  hideArrow = false,
  autoplay: autoplayProp,
  arrowLeft,
  arrowRight,
  containerClassName,
  containerStyle,
  children,
  startPage = 0,
  onPageChanged,
  onTotalPagesChanged,
  showDots,
  dotColorActive = '#795548',
  dotColorInactive = '#ccc',
  responsiveLayout,
  mobileBreakpoint = 767,
}: CarouselProps) {
  const [currentPage, setCurrentPage] = useState<number>(startPage);
  const [isHover, setIsHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [cols, setCols] = useState<number>(colsProp);
  const [rows, setRows] = useState<number>(rowsProp);
  const [gap, setGap] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(loopProp);
  const [autoplay, setAutoplay] = useState(autoplayProp);
  const railWrapperRef = useRef<HTMLDivElement>(null);
  const [railWrapperWidth, setRailWrapperWidth] = useState(0);
  const onPageChangedRef = useRefProp(onPageChanged);
  const onTotalPagesChangedRef = useRefProp(onTotalPagesChanged);
  const breakpointSetting = useResponsiveLayout(responsiveLayout);
  const randomKey = useMemo(() => `${Math.random()}-${Math.random()}`, []);
  const [hasSetResizeHandler, setHasSetResizeHandler] = useState(false);
  const autoplayIntervalRef: any = useRef(null);

  const itemList = useMemo(
    () => Children.toArray(children).filter((child) => (child as any)?.type?.displayName === CAROUSEL_ITEM),
    [children]
  );

  const handleRailWrapperResize = useCallback(() => {
    railWrapperRef.current && setRailWrapperWidth(railWrapperRef.current.offsetWidth);
  }, [railWrapperRef]);

  const setResizeHandler = useCallback(() => {
    addResizeHandler(`gapCalculator-${randomKey}`, (handleRailWrapperResize as any));
    setHasSetResizeHandler(true);
  }, [randomKey, handleRailWrapperResize]);

  const rmResizeHandler = useCallback(() => {
    removeResizeHandler(`gapCalculator-${randomKey}`);
    setHasSetResizeHandler(false);
  }, [randomKey]);

  const parseGap = useCallback(
    (gap: number) => {
      let parsed = gap
      let shouldSetResizeHandler = false      

      shouldSetResizeHandler && !hasSetResizeHandler && setResizeHandler()
      !shouldSetResizeHandler && hasSetResizeHandler && rmResizeHandler()
      return parsed
    },
    [
      railWrapperWidth,
      railWrapperRef,
      hasSetResizeHandler,
      setResizeHandler,
      rmResizeHandler
    ]
  );

  useEffect(() => {
    const { cols, rows, gap, loop, autoplay } = breakpointSetting ?? {};
    setCols(cols ?? colsProp);
    setRows(rows ?? rowsProp);
    setGap(parseGap(gap ?? gapProp));
    setLoop(loop ??loopProp);
    setAutoplay(autoplay ?? autoplayProp);
    setCurrentPage(0);
  }, [breakpointSetting, colsProp, rowsProp, gapProp, loopProp, parseGap]);

  const itemAmountPerSet = cols * rows;
  const itemSetList = useMemo(
    () =>
      itemList.reduce<JSX.Element[][]>((result, item, i) => {
        const itemComponent = (
          <Item key={i} scrollSnap={scrollSnap}>
            {item}
          </Item>
        );

        if (i % itemAmountPerSet === 0) {
          result.push([itemComponent]);
        } else {
          result[result.length - 1].push(itemComponent);
        }

        return result;
      }, []),
    [itemList, itemAmountPerSet, scrollSnap]
  );

  const page = Math.ceil(itemList.length / itemAmountPerSet);

  useEffect(() => {
    if (scrollable) return;
    onPageChangedRef.current?.(currentPage);
  }, [scrollable, currentPage]);

  useEffect(() => {
    if (scrollable) return;
    onTotalPagesChangedRef.current?.(page);
  }, [scrollable, page]);

  useEffect(() => {
    if (page > 0 && currentPage + 1 > page) {
      setCurrentPage(page - 1);
    }
  }, [currentPage, page]);

  const handlePrev = useCallback(() => {
    if (scrollable) {
      if (railWrapperRef.current) {
        const left = railWrapperRef.current.scrollLeft;
        const width = railWrapperRef.current.clientWidth;
        railWrapperRef.current.scrollTo({
          left: Math.max(left - width, 0),
          behavior: 'smooth',
        });
      }

      return;
    }
    setCurrentPage((p) => {
      const prevPage = p - 1;
      if (loop && prevPage < 0) {
        return page - 1;
      }
      return prevPage;
    });
  }, [scrollable, loop, page]);

  const handleNext = useCallback(
    (isMobile = false) => {
      const railWrapper = railWrapperRef.current;
      if (isMobile && railWrapper) {
        if (!scrollSnap) {
          return;
        }

        const { scrollLeft, offsetWidth, scrollWidth } = railWrapper
        railWrapper.scrollBy({
          top: 0,
          left:
            loop && scrollLeft + offsetWidth >= scrollWidth
              ? -scrollLeft
              : scrollLeft === 0
                ? gap +
                  (offsetWidth - gap) * 0.9 -
                  (offsetWidth * 0.1 - gap * 1.1) / 2
                : (offsetWidth - gap) * 0.9 + gap,
          behavior: 'smooth'
        });
      } else {
        setCurrentPage(p => {
          const nextPage = p + 1;
          if (nextPage >= page) {
            return loop ? 0 : p;
          }
          return nextPage;
        });
      }
    },
    [loop, page, gap, railWrapperRef, scrollSnap]
  );

  const startAutoplayInterval = useCallback(() => {
    if (autoplayIntervalRef.current === null) {
      autoplayIntervalRef.current = setInterval(() => {
        handleNext(window.innerWidth <= mobileBreakpoint);
      }, autoplay);
    }
  }, [autoplay, autoplayIntervalRef, handleNext, mobileBreakpoint]);

  useEffect(() => {
    startAutoplayInterval();

    return () => {
      if (autoplayIntervalRef.current !== null) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    }
  }, [startAutoplayInterval, autoplayIntervalRef]);

  const handleHover = useCallback(() => {
    setIsHover(hover => !hover)
  }, [])

  const handleTouch = useCallback(() => {
    setIsTouch(touch => !touch)
  }, [])

  useEffect(() => {
    if (isHover || isTouch) {
      clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    } else {
      startAutoplayInterval()
    }
  }, [isHover, isTouch, autoplayIntervalRef, startAutoplayInterval])

  const turnToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <Container 
      className={containerClassName} 
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onTouchStart={handleTouch}
      onTouchEnd={handleTouch}
      >
      <ArrowButton
        type="prev"        
        mobileBreakpoint={mobileBreakpoint}
        hidden={(hideArrow || (!loop && currentPage <= 0))}
        CustomBtn={arrowLeft}
        onClick={handlePrev}
      />
      <RailWrapper 
        showDots={showDots} 
        mobileBreakpoint={mobileBreakpoint}
        gap={gap} 
        scrollable={scrollable} 
        scrollSnap={scrollSnap} 
        ref={railWrapperRef}>
        {scrollable ? (
          itemSetList.map((sets, i) => <Fragment key={i}>{sets}</Fragment>)
        ) : (
          <Rail 
            cols={cols} 
            rows={rows} 
            page={page} 
            gap={gap} 
            currentPage={currentPage}            
            mobileBreakpoint={mobileBreakpoint}>
            {itemSetList.map((sets, i) => (
              <ItemSet 
                key={i} 
                cols={cols} 
                rows={rows} 
                gap={gap}              
                mobileBreakpoint={mobileBreakpoint}>
                {sets}
              </ItemSet>
            ))}
          </Rail>
        )}
      </RailWrapper>
      {showDots && (
        <Dots mobileBreakpoint={mobileBreakpoint}>
          {[...Array(page)].map((_, i) => (
            <Dot
              key={i}
              index={i}
              isActive={i === currentPage}
              dotColorInactive={dotColorInactive}
              dotColorActive={dotColorActive}
              onClick={turnToPage}
            />
          ))}
        </Dots>
      )}
      <ArrowButton
        type="next"
        mobileBreakpoint={mobileBreakpoint}
        hidden={ (hideArrow || (!loop && currentPage === page - 1))}
        CustomBtn={arrowRight}
        onClick={handleNext.bind(null, false)}
      />
    </Container>
  );
}

export default Carousel;

type CarouselItemProps = {
  children: React.ReactNode;
};
const CarouselItem: FC<CarouselItemProps> = ({children}) => <>{children}</>;
Carousel.Item = CarouselItem;
Carousel.Item.displayName = CAROUSEL_ITEM;
