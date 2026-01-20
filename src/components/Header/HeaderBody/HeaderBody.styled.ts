import styled, { css } from 'styled-components';

export const StyledHeaderBodyContainer = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    align-items: center;
    gap: ${spacings.s32};
  `;
});

export const StyledHeaderBodyContent = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s32};
    align-items: flex-start;
  `;
});

export const StyledHeaderSocialContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s48};
  `;
});

export const StyledSocialButtonsContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s16};
  `;
});
