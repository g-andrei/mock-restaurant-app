import { footerLeaf } from 'src/assets/Images';
import CopyrightBar from './CopyrightBar';
import {
  StyledFooterContainer,
  StyledFooterContent,
  StyledLeafDecor
} from './Footer.styled';
import FooterDecorator from './FooterDecorator';
import FooterNavigation from './FooterNavigation';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLeafDecor src={footerLeaf} alt="" aria-hidden />
      <StyledFooterContent>
        <Subscribe />
        <FooterDecorator />
        <FooterNavigation />
      </StyledFooterContent>
      <CopyrightBar />
    </StyledFooterContainer>
  );
};

export default Footer;
