import styled, { css } from 'styled-components';

export const StyledUnderConstructionContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    padding: ${spacings.s120} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s32};
  `;
});

export const StyledUnderConstructionContent = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s24};
  `;
});

export const StyledUnderConstructionButtons = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    gap: ${spacings.s24};
  `;
});