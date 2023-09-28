import React, {FunctionComponent, useCallback} from 'react';
import styled from 'styled-components';

const DotWrapper = styled.div`
  display: flex;
  margin: 0 5px;
  cursor: pointer;
`;

const DotDefault = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color}) => color};
`;

type CustomDotProps = {isActive?: boolean};
export interface DotProps {
  index: number;
  isActive?: boolean;
  dotColorInactive?: string;
  dotColorActive?: string;
  dot?: React.ComponentType<CustomDotProps>;
  onClick(index: number): void;
}
const Dot: FunctionComponent<DotProps> = ({
  index,
  isActive = false,
  dotColorInactive,
  dotColorActive,
  dot: DotCustom,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  return (
    <DotWrapper onClick={handleClick}>
      {DotCustom ? (
        <DotCustom isActive={isActive} />
      ) : (
        <DotDefault color={isActive ? dotColorActive : dotColorInactive} />
      )}
    </DotWrapper>
  );
};

export default Dot;
