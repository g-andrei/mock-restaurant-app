import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { foodCollageWhyChooseUs } from 'src/assets/Images';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';

import { Cookie, Hamburger, Whine } from 'src/assets/Icons';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import {
  StyledBadge,
  StyledBadgeRight,
  StyledBodyText,
  StyledContentContainer,
  StyledFeatureCard,
  StyledFeaturesRow,
  StyledHeadlineContainer,
  StyledImage,
  StyledImageContainer,
  StyledTitle,
  StyledWhyChooseUsContainer
} from './WhyChooseUs.styled';

const { handText, h2, lgText, smText, mdText, h5, lgTextBold } =
  TYPOGRAPHY_CONSTANTS;

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledWhyChooseUsContainer>
      <StyledImageContainer>
        <StyledImage src={foodCollageWhyChooseUs} alt="Why Choose Us" />
      </StyledImageContainer>

      <StyledContentContainer>
        <StyledTitle>
          <Typography
            variant={handText}
            style={{ color: theme.colors.primary }}
          >
            {t('whyChooseuse.title')}
          </Typography>
        </StyledTitle>

        <StyledHeadlineContainer>
          <Typography variant={h2} style={{ color: theme.colors.white }}>
            {highlightFirstLetters(t('whyChooseuse.headline'), 2)}
          </Typography>
        </StyledHeadlineContainer>

        <StyledBodyText>
          <Typography variant={smText} style={{ color: theme.colors.white }}>
            {t('whyChooseuse.body')}
          </Typography>
        </StyledBodyText>

        <StyledFeaturesRow>
          <StyledFeatureCard>
            <Icon IconComponent={Hamburger} size={56} />
            <Typography variant={mdText} style={{ color: theme.colors.white }}>
              {t('whyChooseuse.fastFood')}
            </Typography>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Icon IconComponent={Cookie} size={56} />
            <Typography variant={mdText} style={{ color: theme.colors.white }}>
              {t('whyChooseuse.lunch')}
            </Typography>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Icon IconComponent={Whine} size={56} />
            <Typography variant={mdText} style={{ color: theme.colors.white }}>
              {t('whyChooseuse.dinner')}
            </Typography>
          </StyledFeatureCard>
        </StyledFeaturesRow>

        <StyledBadge>
          <div
            style={{
              padding: '18px 52px 18px 42px',
              display: 'flex',
              alignItems: 'center',
              gap: '50px'
            }}
          >
            <Typography variant={h2} style={{ color: theme.colors.primary }}>
              {t('whyChooseuse.thirtyYears')}
            </Typography>

            <StyledBadgeRight>
              <Typography
                variant={lgText}
                style={{ color: theme.colors.black.b1 }}
              >
                {t('whyChooseuse.years')}
              </Typography>
              <Typography
                variant={lgTextBold}
                style={{ color: theme.colors.black.b1 }}
              >
                {t('whyChooseuse.experienced')}
              </Typography>
            </StyledBadgeRight>
          </div>
        </StyledBadge>
      </StyledContentContainer>
    </StyledWhyChooseUsContainer>
  );
};

export default WhyChooseUs;
