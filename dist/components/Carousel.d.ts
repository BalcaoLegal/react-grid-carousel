import { CSSProperties, FC, ReactNode } from 'react';
import { DotProps } from './Dots';
export declare type CarouselProps = {
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
declare function Carousel({ cols: colsProp, rows: rowsProp, gap: gapProp, loop: loopProp, scrollable, scrollSnap, hideArrow, arrowLeft, arrowRight, containerClassName, containerStyle, children, startPage, onPageChanged, onTotalPagesChanged, showDots, dotColorActive, dotColorInactive, }: CarouselProps): JSX.Element;
declare namespace Carousel {
    var Item: FC<{}>;
}
export default Carousel;
