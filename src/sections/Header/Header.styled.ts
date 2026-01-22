import { headerHeroBackground } from 'src/assets/Images';
import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
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

