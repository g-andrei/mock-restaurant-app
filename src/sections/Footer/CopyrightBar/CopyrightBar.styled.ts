import styled, { css } from 'styled-components';

export const StyledCopyrightbarContaienr = styled.div(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spacings.s32} ${spacings.s300};
    background-color: ${colors.primary};
  `;
});

export const StyledSocialIconsWrapper = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    align-items: center;
    gap: ${spacings.s14};
  `;
});

export const StyledSocialIconSquare = styled.span(({ theme }) => {
  const { colors, spacings, radii } = theme;
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${spacings.s32};
    height: ${spacings.s32};
    border-radius: ${radii.s4};
    background-color: ${colors.white};
    line-height: 0;

    &:hover svg path {
      transition: fill 0.3s ease-in-out;
      fill: ${colors.primary};
    }
  `;
});
