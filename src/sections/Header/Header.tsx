import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from 'src/constants/routes';
import { StyledHeaderContainer } from './Header.styled';
import HomeHero from './HomeHero';
import NavBar from './NavBar/NavBar';
import PageHero from './PageHero';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const route = getRouteByPathname(location.pathname);
  const pageTitle = t(route.titleKey);

  return (
    <StyledHeaderContainer>
      <NavBar />
      {isHomePage ? <HomeHero /> : <PageHero title={pageTitle} />}
    </StyledHeaderContainer>
  );
};

export default Header;
