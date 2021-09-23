import * as React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';
const StyledSquare = styled.button`
  width: 90px;
  height: 90px;
  background: #6d3e67;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  border-radius: 15px;
  font-size: 60px;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}
