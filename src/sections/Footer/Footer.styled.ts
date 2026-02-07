import styled, { css } from 'styled-components';

export const StyledFooterContainer = styled.footer(({ theme }) => {
  const { colors } = theme;

  return css`
    position: relative;
    overflow: visible;
    background-color: ${colors.background};
  `;
});

export const StyledFooterContent = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    padding: 0 ${spacings.s300};
  `;
});

export const StyledLeafDecor = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 300px;
`;
