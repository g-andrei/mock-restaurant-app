import styled, { css } from 'styled-components';

export const StyledFooterSeparator = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    background-color: ${colors.background};
    padding: 0 0 ${spacings.s60} 0;
    display: flex;
    justify-content: center;
  `;
});

export const StyledSeparatorLine = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: calc(100% - ${spacings.s720});
    height: 1px;
    background-color: ${colors.primary};
  `;
});
