import { useTranslation } from 'react-i18next';
import { headerHero } from 'src/assets/Images';

import {
  Button,
  PLATFORMS,
  SocialIcon,
  Typography,
  TYPOGRAPHY_CONSTANTS
} from 'src/components';

import DecoratorLine from './DecoratorLine';
import {
  StyledHeaderBodyContainer,
  StyledHeaderBodyContent,
  StyledHeaderSocialContainer,
  StyledSocialButtonsContainer
} from './HeaderBody.styled';

const { h1 } = TYPOGRAPHY_CONSTANTS;

const HeaderBody = () => {
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
          {t('header.hero-title')}
        </Typography>
        <Typography variant="smText" style={{ color: 'white' }}>
          {t('header.hero-subtitle')}
        </Typography>
        <Button rounded>{t('button.see-menu')}</Button>
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

export default HeaderBody;
