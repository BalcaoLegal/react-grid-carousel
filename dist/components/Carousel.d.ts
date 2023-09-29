import { CSSProperties, FC, ReactNode } from 'react';
import { DotProps } from './Dots';
import { UseResponsiveLayoutProps } from '../hooks/responsiveLayoutHook';
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
declare function Carousel({ cols: colsProp, rows: rowsProp, gap: gapProp, loop: loopProp, scrollable, scrollSnap, hideArrow, autoplay: autoplayProp, arrowLeft, arrowRight, containerClassName, containerStyle, children, startPage, onPageChanged, onTotalPagesChanged, showDots, dotColorActive, dotColorInactive, responsiveLayout, mobileBreakpoint, }: CarouselProps): import("react/jsx-runtime").JSX.Element;
declare namespace Carousel {
    var Item: FC<CarouselItemProps>;
}
export default Carousel;
type CarouselItemProps = {
    children: React.ReactNode;
};
