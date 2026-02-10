import { backgroundActiveProcess } from 'src/assets/Images';
import styled, { css } from 'styled-components';

export const StyledActiveProcessBackground = styled.div(() => {
  return css`
    background-image: url(${backgroundActiveProcess});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
});

export const StyledActiveProcessContainer = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    padding: ${spacings.s110} ${spacings.s300};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
});

export const StyledActiveProcessContent = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    width: 51%;
    display: flex;
    flex-direction: column;
    text-align: end;
    gap: ${spacings.s8};
  `;
});

export const StyledActiveProcessTextBlock = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${spacings.s32};
  `;
});
