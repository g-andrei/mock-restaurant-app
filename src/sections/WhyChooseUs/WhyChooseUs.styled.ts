import styled, { css } from 'styled-components';

export const StyledWhyChooseUsContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    padding: ${spacings.s60} ${spacings.s300} ${spacings.s120};
  `;
});

export const StyledImageContainer = styled.div`
  width: 50%;
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
`;

export const StyledContentContainer = styled.div`
  width: 50%;
  padding: 62px 0 0 135px;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    margin-bottom: ${spacings.s32};
  `;
});

export const StyledHeadlineContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    margin-bottom: ${spacings.s8};
  `;
});

export const StyledBodyText = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    margin-bottom: ${spacings.s32};
  `;
});

export const StyledFeaturesRow = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s32};
    margin-bottom: ${spacings.s32};
  `;
});

export const StyledFeatureCard = styled.div(({ theme }) => {
  const { colors, spacings, radii } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s8};

    > span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${spacings.s22};
      background: ${colors.primary};
      border-radius: ${radii.s6};
    }
  `;
});

export const StyledBadge = styled.div(({ theme }) => {
  const { colors, radii } = theme;

  return css`
    border-radius: ${radii.s6};
    background: ${colors.white};
    border-left: 10px solid ${colors.primary};
    width: fit-content;
  `;
});

export const StyledBadgeRight = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    color: ${colors.black.b1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
  `;
});
