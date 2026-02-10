import styled, { css } from 'styled-components';

export const StyledNotFoundPageContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    padding: ${spacings.s120} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s32};
  `;
});

export const StyledNotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNotFoundTitle = styled.div(({ theme }) => ({
  color: theme.colors.primary
}));

export const StyledNotFoundSubtitle = styled.div(({ theme }) => ({
  color: theme.colors.grey.g1,
  marginBottom: theme.spacings.s24
}));

export const StyledNotFoundText = styled.div(({ theme }) => ({
  color: theme.colors.grey.g2
}));
