import styled, { css } from 'styled-components';

export const StyledOurChefContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacings.s60} ${spacings.s300};
    gap: ${spacings.s56};
  `;
});

export const StyledTitlesContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s8};
    align-items: center;
  `;
});

export const StyledOurChef = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s24};
  `;
});

export const StyledChefCard = styled.div(() => {
  return css`
    position: relative;
  `;
});

export const StyledChefCardImage = styled.img`
  width: 100%;
  display: block;
`;

export const StyledChefCardOverlay = styled.div(({ theme }) => {
  const { colors, spacings, radii } = theme;

  return css`
    position: absolute;
    bottom: 0;
    background-color: ${colors.white};
    padding: ${spacings.s8} ${spacings.s32};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${radii.s6};
  `;
});
