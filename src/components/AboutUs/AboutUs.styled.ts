import styled, { css } from 'styled-components';

export const StyledAboutUsContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    padding: ${spacings.s120} ${spacings.s300};
  `;
});

export const StyledAboutUsLeft = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 50%;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    row-gap: ${spacings.s32};
  `;
});

export const StyledAboutUsRight = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${spacings.s16};
  `;
});

export const StyledContentStack = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s32};
  `;
});

export const StyledTextStack = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s24};
  `;
});

export const StyledCheckRow = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    align-items: center;
    gap: ${spacings.s8};
  `;
});

export const StyledFullWidthImage = styled.img`
  width: 100%;
`;

export const StyledHalfWidthImage = styled.img`
  width: 50%;
`;

export const StyledHalfImagesRow = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    display: flex;
    gap: ${spacings.s16};
  `;
});

