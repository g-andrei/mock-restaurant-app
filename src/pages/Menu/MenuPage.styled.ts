import styled, { css } from 'styled-components';

export const StyledMenuPageContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    padding: ${spacings.s120} 0;
    display: flex;
    flex-direction: column;
    gap: ${spacings.s120};
  `;
});
