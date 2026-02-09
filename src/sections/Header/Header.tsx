import { useLocation } from 'react-router-dom';
import { StyledHeaderContainer } from './Header.styled';
import HomeHero from './HomeHero';
import NavBar from './NavBar/NavBar';
import PageHero from './PageHero';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/menu') {
      return 'Our Menu';
    }
    if (path === '/shop') {
      return 'Our Shop';
    }
    if (path.startsWith('/shop')) {
      return 'Shop Details';
    }
    if (path === '/cart') {
      return 'Shopping Cart';
    }
    return '';
  };

  return (
    <StyledHeaderContainer>
      <NavBar />
      {isHomePage ? <HomeHero /> : <PageHero title={getPageTitle()} />}
    </StyledHeaderContainer>
  );
};

export default Header;
