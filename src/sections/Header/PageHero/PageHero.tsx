import { useLocation } from 'react-router-dom';
import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';
import {
  StyledPageHeroContainer,
  StyledPageHeroContent
} from './PageHero.styled';

const { h2, lgText } = TYPOGRAPHY_CONSTANTS;

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  const theme = useTheme();
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === '/menu') {
      return 'Home > Menu';
    }
    if (path === '/shop') {
      return 'Home > Shop';
    }
    if (path.startsWith('/shop')) {
      return 'Home > Shop > Shop Details';
    }
    if (path === '/cart') {
      return 'Home > Shopping Cart';
    }
    return 'Home > 404';
  };

  console.log(location);
  console.log(getBreadcrumb());

  const breadcrumb = getBreadcrumb();
  const breadcrumbParts = breadcrumb.split(' > ');

  return (
    <StyledPageHeroContainer>
      <StyledPageHeroContent>
        <Typography variant={h2} style={{ color: theme.colors.white }}>
          {title}
        </Typography>
        <Typography variant={lgText} style={{ color: theme.colors.white }}>
          {breadcrumbParts.map((part, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <span key={index}>
                {isLast ? (
                  <span style={{ color: theme.colors.primary }}>{part}</span>
                ) : (
                  <>
                    <span>{part}</span>
                    {index < array.length - 1 && <span> &gt; </span>}
                  </>
                )}
              </span>
            );
          })}
        </Typography>
      </StyledPageHeroContent>
    </StyledPageHeroContainer>
  );
};

export default PageHero;
