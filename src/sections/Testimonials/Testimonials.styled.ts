import styled, { css } from 'styled-components';

export const StyledTestimonialsContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacings.s60} ${spacings.s300} ${spacings.s120};
    background-color: ${colors.background};
    gap: ${spacings.s120};
  `;
});

export const StyledTitlesContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacings.s8};
    width: 100%;
  `;
});

export const StyledTestimonialsCard = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    position: relative;
    max-width: ${spacings.s870};
    padding: ${spacings.s110} ${spacings.s86} ${spacings.s32};
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
});

export const StyledTestimonialsCardAvatar = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${spacings.s132};
  `;
});

export const StyledTestimonialsCardContent = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s16};
    text-align: center;
  `;
});

export const StyledTestimonialBody = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s32};
  `;
});

export const StyledTestimonialAuthor = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s8};
  `;
});

export const StyledTestimonialsDecor = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    width: ${spacings.s400};
    bottom: 0;
    right: -138px;
  `;
});
