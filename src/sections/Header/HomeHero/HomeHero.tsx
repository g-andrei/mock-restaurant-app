import { useTranslation } from 'react-i18next';
import { headerHero } from 'src/assets/Images';

import {
  Button,
  PLATFORMS,
  SocialIcon,
  Typography,
  TYPOGRAPHY_CONSTANTS
} from 'src/components';

import DecoratorLine from '../HeaderBody/DecoratorLine';
import {
  StyledHeaderBodyContainer,
  StyledHeaderBodyContent,
  StyledHeaderSocialContainer,
  StyledSocialButtonsContainer
} from './HomeHero.styled';

const { h1 } = TYPOGRAPHY_CONSTANTS;

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <StyledHeaderBodyContainer>
      <StyledHeaderSocialContainer>
        <DecoratorLine />

        <StyledSocialButtonsContainer>
          <SocialIcon platform={PLATFORMS.FACEBOOK} />
          <SocialIcon platform={PLATFORMS.TWITTER} />
          <SocialIcon platform={PLATFORMS.PINTEREST} />
        </StyledSocialButtonsContainer>

        <DecoratorLine />
      </StyledHeaderSocialContainer>

      <StyledHeaderBodyContent>
        <Typography variant={h1} style={{ color: 'white' }}>
          {t('header.heroTitle')}
        </Typography>
        <Typography variant="smText" style={{ color: 'white' }}>
          {t('header.heroSubtitle')}
        </Typography>
        <Button rounded>{t('button.seeMenu')}</Button>
      </StyledHeaderBodyContent>
      <div>
        <img
          src={headerHero}
          alt=""
          style={{ position: 'relative', left: '124px' }}
        />
      </div>
    </StyledHeaderBodyContainer>
  );
};

export default HomeHero;
