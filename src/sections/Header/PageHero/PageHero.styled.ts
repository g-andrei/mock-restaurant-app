import { headerHeroPages } from 'src/assets/Images';
import styled, { css } from 'styled-components';

export const StyledPageHeroContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    background-image: url(${headerHeroPages});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacings.s108} 0;
  `;
});

export const StyledPageHeroContent = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s20};
  `;
});
