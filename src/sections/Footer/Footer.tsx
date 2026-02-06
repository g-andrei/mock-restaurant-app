import FooterDecorator from './FooterDecorator';
import FooterNavigation from './FooterNavigation';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <>
      <Subscribe />
      <FooterDecorator />
      <FooterNavigation />
    </>
  );
};

export default Footer;
