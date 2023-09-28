import React, { FunctionComponent } from 'react';
declare type CustomDotProps = {
    isActive?: boolean;
};
export interface DotProps {
    index: number;
    isActive?: boolean;
    dotColorInactive?: string;
    dotColorActive?: string;
    dot?: React.ComponentType<CustomDotProps>;
    onClick(index: number): void;
}
declare const Dot: FunctionComponent<DotProps>;
export default Dot;
