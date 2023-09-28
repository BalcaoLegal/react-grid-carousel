import { FC, ReactNode, HTMLAttributes } from 'react';
export declare type ArrowButtonProps = HTMLAttributes<HTMLDivElement> & {
    type?: 'prev' | 'next';
    CustomBtn?: ReactNode;
};
declare const ArrowButton: FC<ArrowButtonProps>;
export default ArrowButton;
