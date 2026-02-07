import styled, { css } from 'styled-components';

export const StyledFooterSeparator = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    padding: 0 0 ${spacings.s60} 0;
    display: flex;
    justify-content: center;
  `;
});

export const StyledSeparatorLine = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: calc(100% - ${spacings.s120});
    height: 1px;
    background-color: ${colors.primary};
  `;
});
