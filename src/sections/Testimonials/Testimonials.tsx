import { useTranslation } from 'react-i18next';

import { Quotes, Stars } from 'src/assets/Icons';
import { testimonialsAvatar, testimonialsDecor } from 'src/assets/Images';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';

import {
  StyledTestimonialAuthor,
  StyledTestimonialBody,
  StyledTestimonialsCard,
  StyledTestimonialsCardAvatar,
  StyledTestimonialsCardContent,
  StyledTestimonialsContainer,
  StyledTestimonialsDecor,
  StyledTitlesContainer
} from './Testimonials.styled';

const { handText, h2, h5, smText } = TYPOGRAPHY_CONSTANTS;

// TODO: Testimonials should come from API (replace static data with API response).
// TODO: Implement carousel (slide through multiple testimonials, sync with dots/arrows).

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledTestimonialsContainer>
      <StyledTitlesContainer>
        <Typography variant={handText} style={{ color: theme.colors.primary }}>
          {t('testimonials.title')}
        </Typography>
        <Typography variant={h2} style={{ color: theme.colors.white }}>
          {t('testimonials.subtitle')}
        </Typography>
      </StyledTitlesContainer>

      <StyledTestimonialsCard>
        <StyledTestimonialsCardAvatar
          src={testimonialsAvatar}
          alt={t('testimonials.alt')}
        />

        <StyledTestimonialsCardContent>
          <StyledTestimonialBody>
            <Icon IconComponent={Quotes} size={48} />

            <Typography
              variant={smText}
              style={{ color: theme.colors.grey.g2 }}
            >
              {t('testimonials.content')}
            </Typography>

            <Icon IconComponent={Stars} size={[152, 24]} />
          </StyledTestimonialBody>

          <StyledTestimonialAuthor>
            <Typography variant={h5} style={{ color: theme.colors.grey.g1 }}>
              {t('testimonials.name')}
            </Typography>

            <Typography
              variant={smText}
              style={{ color: theme.colors.grey.g3 }}
            >
              {t('testimonials.position')}
            </Typography>
          </StyledTestimonialAuthor>
        </StyledTestimonialsCardContent>

        <StyledTestimonialsDecor
          src={testimonialsDecor}
          alt={t('testimonials.alt')}
        />
      </StyledTestimonialsCard>
    </StyledTestimonialsContainer>
  );
};

export default Testimonials;
