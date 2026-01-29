import styled, { css } from 'styled-components';

export const StyledNavBarContainer = styled.nav(({ theme }) => {
  const { spacings } = theme;

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

export const StyledNavLink = styled.li`
  list-style: none;
`;

export const StyledNavButton = styled.button<{
  $isActive?: boolean;
}>(({ theme, $isActive }) => {
  const { colors, spacings } = theme;

  return css`
  
    position: relative;
    gap: ${spacings.s4 || '4px'};
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    ${$isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -${spacings.s8};
        left: 50%;
        transform: translateX(-50%);
        width: ${spacings.s6};
        height: ${spacings.s6};
        background-color: ${colors.primary};
        border-radius: 50%;
      }
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
  const { colors, spacings, radii } = theme;

  return css`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${colors.primary};
    border-radius: ${radii.s24};
    padding: ${spacings.s8} ${spacings.s16};
    gap: ${spacings.s8};
    min-width: ${spacings.s200};
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

export const StyledDropdownCaret = styled.span(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${theme.colors.grey.g4};
    margin-left: ${spacings.s4};
  `;
});