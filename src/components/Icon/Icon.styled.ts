import styled, { css } from 'styled-components';

interface SVGContainerProps {
  color?: string;
  width?: number;
  height?: number;
  hoverColor?: string;
}

export const StyledSVGContainer = styled.span<SVGContainerProps>(
  ({ width, height, color, hoverColor }) => css`
    svg {
      width: ${width}px;
      height: ${height}px;

      path {
        fill: ${color};

        ${hoverColor &&
        css`
          &:hover {
            fill: ${hoverColor};
            transition: fill 0.3s ease-in-out;
          }
        `}
      }
    }
  `
);
