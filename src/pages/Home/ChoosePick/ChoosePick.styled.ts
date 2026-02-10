import styled, { css } from 'styled-components';

export const StyledChoosePickContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacings.s120} ${spacings.s300} ${spacings.s60};
    background-color: ${colors.background};
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

export const StyledButtonsContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s100};
    align-self: start;
  `;
});

export const StyledPickButton = styled.button<{ $isActive?: boolean }>(
  ({ theme, $isActive }) => {
    const { colors, spacings } = theme;

    return css`
      display: flex;
      background: transparent;
      cursor: pointer;
      padding: ${spacings.s8} ${spacings.s16};
      color: ${$isActive ? colors.primary : colors.white};
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    `;
  }
);

export const StyledMenuLayout = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    display: grid;
    grid-template-columns: 35% 1fr;
    gap: ${spacings.s20};
  `;
});

export const StyledMenuHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledMenuItemsGrid = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${spacings.s32};
  `;
});

export const StyledMenuItemRow = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s8};
  `;
});

export const StyledMenuItemThumb = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: ${spacings.s80};
    height: ${spacings.s80};
    object-fit: cover;
  `;
});

export const StyledMenuItemText = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    display: flex;
    flex-direction: column;
    color: ${colors.white};
  `;
});

export const StyledMenuItemDescription = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    color: ${colors.grey.g4};
  `;
});

export const StyledMenuItemPrice = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    color: ${colors.primary};
  `;
});
