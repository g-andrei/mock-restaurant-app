import { ThemeInterfaces } from 'src/theme/theme';
import styled, { css } from 'styled-components';
import { BUTTON_VARIANT } from './constants';

interface StyledButtonProps {
  theme: ThemeInterfaces;
  rounded?: boolean;
  variant?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, rounded, variant }) => {
    const { spacings, radii, colors } = theme;

    return css`
      transition: 0.5s;
      background-color: ${variant === BUTTON_VARIANT.secondary
        ? colors.white
        : variant === BUTTON_VARIANT.tertiary
          ? 'transparent'
          : colors.primary};

      color: ${variant === BUTTON_VARIANT.secondary
        ? colors.primary
        : colors.white};

      border: 1px solid ${colors.primary};

      border-radius: ${rounded ? radii.s30 : radii.s6};
      padding: ${spacings.s16} ${spacings.s48};

      &:hover {
        transition: 0.5s;
        background-color: ${colors.secondary};
        border: 1px solid ${colors.secondary};
        color: ${colors.primary};
      }
    `;
  }}
`;
