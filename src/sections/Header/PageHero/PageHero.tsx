import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledPageHeroContainer>
      <StyledPageHeroContent>
        <Typography variant={h2} style={{ color: theme.colors.white }}>
          {title}
        </Typography>
        <Typography variant={lgText} style={{ color: theme.colors.white }}>
          {t('breadcrumb.home')} &gt; <span style={{ color: theme.colors.primary }}>{title}</span>
        </Typography>
      </StyledPageHeroContent>
    </StyledPageHeroContainer>
  );
};

export default PageHero;
