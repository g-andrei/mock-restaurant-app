import styled, { css } from 'styled-components';

export const StyledNavBarContainer = styled.nav(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    padding: ${spacings.s24} ${spacings.s300};
  `;
});

export const StyledNavLinks = styled.ul(({ theme }) => {
  const { spacings } = theme;

  return css`
    list-style: none;
    display: flex;
    align-items: center;
    gap: ${spacings.s32};
    margin: 0;
    padding: 0;
    flex: 1;
  `;
});

export const StyledNavLink = styled.li<{ $isActive?: boolean; $hasDropdown?: boolean }>(({ theme, $isActive, $hasDropdown }) => {
  const { colors, spacings } = theme;

  return css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${spacings.s4 || '4px'};
    cursor: pointer;

    ${$isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -${spacings.s8};
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        background-color: ${colors.primary};
        border-radius: 50%;
      }
    `}
  `;
});



export const StyledBrandText = styled.span<{ $isHighlighted?: boolean }>(({ theme, $isHighlighted }) => {
  const { colors } = theme;

  return css`
    ${$isHighlighted
      ? css`
          color: ${colors.primary};
        `
      : css`
          color: ${colors.white};
        `}
  `;
});

export const StyledRightSection = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    align-items: center;
    gap: ${spacings.s16};
    flex: 1;
    justify-content: flex-end;
  `;
});

export const StyledSearchContainer = styled.div(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${colors.primary};
    border-radius: 24px;
    padding: ${spacings.s8} ${spacings.s16};
    gap: ${spacings.s8};
    min-width: 200px;
  `;
});

export const StyledSearchInput = styled.input(({ theme }) => {
  const { colors } = theme;

  return css`
    background: transparent;
    border: none;
    outline: none;
    color: ${colors.grey.g4};
    font-size: 14px;
    flex: 1;

    &::placeholder {
      color: ${colors.grey.g4};
    }
  `;
});

export const StyledDropdownCaret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.colors.grey.g4};
  margin-left: 4px;
`;
