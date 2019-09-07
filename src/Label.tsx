// import * as React from 'react';

import styled, { css } from 'styled-components';

interface LabelProps {
  type: 'default' | 'warning';
}
export const Label = styled.span<LabelProps>`
  text-align: left;
  font: Bold 16px/22px Open Sans;
  font-size: 16px;
  letter-spacing: 0;
  color: #666666;
  ${props =>
    props.type === 'warning' &&
    css`
      color: #b42a2a;
    `}
`;
