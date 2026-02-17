import styled, { css } from 'styled-components';

export const StyledMenuSection = styled.section<{ $isReverse?: boolean }>(
  ({ theme, $isReverse }) => {
    const { spacings } = theme;

    return css`
      display: flex;
      justify-content: space-between;
      flex-direction: ${$isReverse ? 'row' : 'row-reverse'};
      gap: ${spacings.s112};
      padding: 0 ${spacings.s300};
    `;
  }
);

export const StyledMenuSectionContent = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacings.s24};
  `;
});

export const StyledMenuSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMenuSectionImage = styled.img(({ theme }) => {
  const { spacings } = theme;
  return css`
    width: ${spacings.s448};
  `;
});

export const StyledMenuItem = styled.div(({ theme }) => {
  const { colors, spacings } = theme;
  return css`
    display: flex;
    justify-content: space-between;
    padding-bottom: ${spacings.s16};
    border-bottom: 1px dashed ${colors.grey.g5};
  `;
});

export const StyledMenuItemDetails = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacings.s8};
  `;
});

export const StyledMenuItemName = styled.div(({ theme }) => {
  const { colors } = theme;
  return css`
    cursor: pointer;
    color: ${colors.grey.g1};
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
  `;
});
