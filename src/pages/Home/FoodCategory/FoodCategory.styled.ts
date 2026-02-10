import styled, { css } from 'styled-components';

export const StyledFoodCategoryContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacings.s60} ${spacings.s300};
    gap: ${spacings.s48};
  `;
});

export const StyledFoodCategoryHeader = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s16};
    text-align: center;
  `;
});

export const StyledFoodCategoryTitle = styled.div`
  & .first-letters {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledFoodCategoryCards = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    display: flex;
    gap: ${spacings.s24};
    justify-content: center;
  `;
});

export const StyledFoodCategoryCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
  flex: 1;
  max-width: 300px;
  aspect-ratio: 1;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const StyledCardTagsContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: ${spacings.s8};
    align-items: flex-end;
  `;
});

export const StyledCardTag = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    padding: ${spacings.s8} ${spacings.s16};
    border-radius: 4px;
    white-space: nowrap;
  `;
});

export const StyledCardTagDiscount = styled(StyledCardTag)(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    background-color: ${colors.white};
    position: relative;
    top: 0;
    left: 0;
    padding: 4px ${spacings.s8};
    width: fit-content;
  `;
});

export const StyledCardTagLabel = styled(StyledCardTag)(({ theme }) => {
  const { colors } = theme;

  return css`
    background-color: ${colors.primary};
    position: relative;
    top: 0;
    left: 0;
  `;
});
