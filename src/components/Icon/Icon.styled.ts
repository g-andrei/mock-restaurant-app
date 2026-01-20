import styled, { css } from 'styled-components';

interface SVGContainerProps {
  color?: string;
  size?: number;
  hoverColor?: string;
}

export const StyledSVGContainer = styled.span<SVGContainerProps>(
  ({ size, color, hoverColor }) => css`
    svg {
      width: ${size}px;
      height: ${size}px;

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
