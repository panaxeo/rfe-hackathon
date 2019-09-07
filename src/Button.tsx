// import * as React from 'react';

import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001a;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  padding: 12px;
  font-size: 20px;
  color: #666666;
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background-color: #3eb1c8;
      color: white;
    `}
`;
