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
} & Pick<DotProps, 'dot' | 'dotColorActive' | 'dotColorInactive'>;

const Container = styled.div`
  position: relative;
`;

const RailWrapper = styled.div<Pick<CarouselProps, 'scrollSnap' | 'scrollable' | 'gap' | 'showDots'>>`
  overflow: hidden;
  ${({scrollable, scrollSnap, gap, showDots}) =>
    `${
      scrollable
        ? `
    gap: ${gap}px;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: ${scrollSnap ? 'x mandatory' : ''};
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `
        : ''
    }
    margin: ${showDots ? '0 0 20px' : 0};
      `}
`;

const Rail = styled.div<Pick<CarouselProps, 'gap' | 'rows' | 'cols'> & {page: number; currentPage: number}>`
  display: grid;
  grid-column-gap: ${({gap}) => `${gap}px`};
  position: relative;
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  grid-template-columns: ${({page}) => `repeat(${page}, 100%)`};
  transform: ${({currentPage, gap}) => `translateX(calc(${-100 * currentPage}% - ${(gap as number) * currentPage}px))`};
`;

const ItemSet = styled.div<Pick<CarouselProps, 'gap' | 'rows' | 'cols'>>`
  display: grid;
  grid-template-columns: ${({cols}) => `repeat(${cols}, 1fr)`};
  grid-template-rows: ${({rows}) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({gap}) => `${gap}px`};
`;

const Dots = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -20px;
  height: 10px;
  width: 100%;
  line-height: 10px;
  text-align: center;
`;

const Item = styled.div<Pick<CarouselProps, 'scrollSnap'>>`
  scroll-snap-align: ${({scrollSnap}) => (scrollSnap ? 'start' : '')};
`;

const CAROUSEL_ITEM = 'CAROUSEL_ITEM';

function Carousel({
  cols: colsProp = 1,
  rows: rowsProp = 1,
  gap: gapProp = 10,
  loop: loopProp = false,
  scrollable = false,
  scrollSnap = true,
  hideArrow = false,
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
}: CarouselProps) {
  const [currentPage, setCurrentPage] = useState<number>(startPage);
  const [cols, setCols] = useState<number>(colsProp);
  const [rows, setRows] = useState<number>(rowsProp);
  const [gap, setGap] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(loopProp);
  const railWrapperRef = useRef<HTMLDivElement>(null);
  const onPageChangedRef = useRefProp(onPageChanged);
  const onTotalPagesChangedRef = useRefProp(onTotalPagesChanged);

  useEffect(() => {
    setCols(colsProp);
    setRows(rowsProp);
    setGap(gapProp);
    setLoop(loopProp);
    setCurrentPage(0);
  }, [colsProp, rowsProp, gapProp, loopProp]);

  const itemList = useMemo(
    () => Children.toArray(children).filter((child) => (child as any)?.type?.displayName === CAROUSEL_ITEM),
    [children]
  );

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

  const handleNext = useCallback(() => {
    if (scrollable) {
      if (railWrapperRef.current) {
        const left = railWrapperRef.current.scrollLeft;
        const width = railWrapperRef.current.clientWidth;
        const fullWidth = railWrapperRef.current.scrollWidth;
        railWrapperRef.current.scrollTo({
          left: Math.min(left + width, fullWidth - width),
          behavior: 'smooth',
        });
      }
      return;
    }
    setCurrentPage((p) => {
      const nextPage = p + 1;
      if (nextPage >= page) {
        return loop ? 0 : p;
      }

      return nextPage;
    });
  }, [scrollable, loop, page, gap]);

  const turnToPage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <Container className={containerClassName} style={containerStyle}>
      <ArrowButton
        type="prev"
        hidden={!scrollable && (hideArrow || (!loop && currentPage <= 0))}
        CustomBtn={arrowLeft}
        onClick={handlePrev}
      />
      <RailWrapper showDots={showDots} gap={gap} scrollable={scrollable} scrollSnap={scrollSnap} ref={railWrapperRef}>
        {scrollable ? (
          itemSetList.map((sets, i) => <Fragment key={i}>{sets}</Fragment>)
        ) : (
          <Rail cols={cols} rows={rows} page={page} gap={gap} currentPage={currentPage}>
            {itemSetList.map((sets, i) => (
              <ItemSet key={i} cols={cols} rows={rows} gap={gap}>
                {sets}
              </ItemSet>
            ))}
          </Rail>
        )}
      </RailWrapper>
      {showDots && (
        <Dots>
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
        hidden={!scrollable && (hideArrow || (!loop && currentPage === page - 1))}
        CustomBtn={arrowRight}
        onClick={handleNext}
      />
    </Container>
  );
}

export default Carousel;

const CarouselItem: FC = ({children}) => <>{children}</>;
Carousel.Item = CarouselItem;
Carousel.Item.displayName = CAROUSEL_ITEM;
