import styled, { css } from 'styled-components';

export const StyleLatesBlogPostContaienr = styled.div(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    padding: ${spacings.s120} ${spacings.s300} ${spacings.s60};
    background-color: ${colors.background};
  `;
});

export const StyledLatesBlogPostHeader = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s8};
    margin-bottom: ${spacings.s60};
    align-items: center;
  `;
});

export const StyledLatesBlogPostsContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacings.s24};
  `;
});

export const StyledLatesBlogPostCard = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
  `;
});

export const StyledLatesBlogPostCardImage = styled.img(() => {
  return css`
    display: block;
    width: 100%;
  `;
});

export const StyledLatesBlogPostCardContent = styled.div(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    padding: ${spacings.s30} ${spacings.s42} ${spacings.s42};
    border: 1px solid ${colors.white};
    border-top: none;
  `;
});

export const StyledCardTextBlock = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s16};
    flex: 1;
    margin-bottom: ${spacings.s32};
  `;
});

export const StyledLatesBlogPostCardActions = styled.div(() => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
});

export const StyledLearnMoreLink = styled.button(({ theme }) => {
  const { colors } = theme;

  return css`
    background: none;
    cursor: pointer;
    color: ${colors.white};

    &:hover {
      color: ${colors.primary};
    }
  `;
});

export const StyledCardActionsIcons = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    align-items: center;
    gap: ${spacings.s8};
  `;
});

export const StyledCardActionButton = styled.button(() => {
  return css`
    background: none;
    cursor: pointer;
  `;
});
