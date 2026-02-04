import styled, { css } from 'styled-components';

export const StyledSubscribeContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${spacings.s60} ${spacings.s360};
    background-color: ${colors.background};
  `;
});

export const StyledSubscribeTextBlock = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s18};
  `;
});

export const StyledEmailInput = styled.input(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    background-color: ${colors.primary};
    outline: none;
    padding: ${spacings.s16} ${spacings.s142} ${spacings.s16} ${spacings.s24};
    color: ${colors.white};

    &::placeholder {
      color: ${colors.white};
    }
  `;
});

export const StyledSubscribeForm = styled.form(({ theme }) => {
  const { radii } = theme;

  return css`
    border-radius: ${radii.s4};
    overflow: hidden;
  `;
});

export const StyledSubscribeButton = styled.button(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    background-color: ${colors.white};
    padding: ${spacings.s16} ${spacings.s24};
    color: ${colors.primary};
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  `;
});
