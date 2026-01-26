import styled, { css } from 'styled-components';

export const StyledOurChefContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacings.s120} ${spacings.s300};
    gap: ${spacings.s48};
  `;
});

export const StyledOurChef = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${spacings.s48};
  `;
});

export const StyledChefCard = styled.div(({ theme }) => {
  const { radii } = theme;

  return css`
    position: relative;
    width: 100%;
    border-radius: ${radii.s6};
    overflow: hidden;
  `;
});

export const StyledChefCardImage = styled.img`
  width: 100%;

  display: block;
`;

export const StyledChefCardOverlay = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    position: absolute;
    bottom: 0;
    background-color: ${colors.white};
    padding: ${spacings.s8} ${spacings.s32};
    display: flex;
    flex-direction: column;
  `;
});
