import styled, { css } from 'styled-components';

export const StyledFooterNavigationContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    padding: 0 ${spacings.s300} ${spacings.s50};
    background-color: ${colors.background};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${spacings.s48};
  `;
});

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledColumnTitle = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    margin-bottom: ${spacings.s24};
  `;
});

export const StyledAboutUsText = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    margin-bottom: ${spacings.s34};
  `;
});

export const StyledOpeningHoursContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s16};
    align-items: flex-start;
  `;
});

export const StyledOpeningHoursIcon = styled.div(({ theme }) => {
  const { colors, spacings, radii } = theme;

  return css`
    padding: ${spacings.s16} ${spacings.s19};
    background: ${colors.primary};
    border-radius: ${radii.s6};
  `;
});

export const StyledOpeningHoursContent = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s2};
  `;
});

export const StyledOpeningHoursTitle = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    color: ${colors.white};
  `;
});

export const StyledLinksList = styled.ul(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s16};
  `;
});

export const StyledLinkItem = styled.li(({ theme }) => {
  const { spacings } = theme;

  return css`
    list-style: none;
    margin-bottom: ${spacings.s16};
  `;
});

export const StyledLink = styled.div(({ theme }) => {
  const { colors } = theme;

  return css`
    color: ${colors.white};
    cursor: pointer;
  `;
});

export const StyledRecentPostList = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s24};
  `;
});

export const StyledRecentPostItem = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    gap: ${spacings.s16};
    align-items: flex-start;
  `;
});

export const StyledRecentPostImage = styled.img(({ theme }) => {
  const { radii, spacings } = theme;

  return css`
    width: ${spacings.s56};
    height: ${spacings.s56};
    object-fit: cover;
    border-radius: ${radii.s6};
    flex-shrink: 0;
  `;
});

export const StyledRecentPostContent = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s2};
  `;
});
