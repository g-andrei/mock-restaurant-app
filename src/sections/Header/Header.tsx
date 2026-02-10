import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { StyledHeaderContainer } from './Header.styled';
import HomeHero from './HomeHero';
import NavBar from './NavBar/NavBar';
import PageHero from './PageHero';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/menu') {
      return t('page.ourMenu');
    }
    if (path === '/shop') {
      return t('page.ourShop');
    }
    if (path.startsWith('/shop')) {
      return t('page.shopDetails');
    }
    if (path === '/cart') {
      return t('page.shoppingCart');
    }
    return t('page.404');
  };

  return (
    <StyledHeaderContainer>
      <NavBar />
      {isHomePage ? <HomeHero /> : <PageHero title={getPageTitle()} />}
    </StyledHeaderContainer>
  );
};

export default Header;
