import React, { ReactNode, HTMLAttributes, MouseEventHandler } from 'react';
export type ArrowButtonProps = HTMLAttributes<HTMLDivElement> & {
    type?: 'prev' | 'next';
    CustomBtn?: ReactNode | React.ComponentClass<any>;
    mobileBreakpoint: number;
    onClick: MouseEventHandler<HTMLDivElement>;
    hidden?: boolean;
};
declare const ArrowButton: ({ type, mobileBreakpoint, hidden, CustomBtn, onClick }: ArrowButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ArrowButton;
