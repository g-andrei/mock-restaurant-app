import headerHeroBackground from 'src/assets/images/headerHeroBackground.png';
import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  padding: 0 300px;
  position: relative;
  background-image: url(${headerHeroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
    display: block;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
