import { useTranslation } from 'react-i18next';
import {
  chefEastwood,
  chefReadfroad,
  chefScoriesh,
  chefWilliam
} from 'src/assets/Images';
import { Button, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { BUTTON_VARIANT } from 'src/components/Button';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import { useTheme } from 'styled-components';
import {
  StyledChefCard,
  StyledChefCardImage,
  StyledChefCardOverlay,
  StyledOurChef,
  StyledOurChefContainer
} from './OurChef.styled';

const { handText, h2, h5, lgText } = TYPOGRAPHY_CONSTANTS;

const OurChef = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const ourChefs = [
    {
      img: chefEastwood,
      alt: t('ourChef.nameEastwood'),
      name: t('ourChef.nameEastwood'),
      position: t('ourChef.positionChiefChef')
    },

    {
      img: chefScoriesh,
      alt: t('ourChef.nameScoriesh'),
      name: t('ourChef.nameScoriesh'),
      position: t('ourChef.positionAssistantChef')
    },
    {
      img: chefWilliam,
      alt: t('ourChef.nameWilliam'),
      name: t('ourChef.nameWilliam'),
      position: t('ourChef.positionAdvertisingChef')
    },
    {
      img: chefReadfroad,
      alt: t('ourChef.nameReadfroad'),
      name: t('ourChef.nameReadfroad'),
      position: t('ourChef.positionChef')
    }
  ];

  return (
    <StyledOurChefContainer>
      <Typography variant={handText} style={{ color: theme.colors.primary }}>
        {t('ourChef.title')}
      </Typography>
      <Typography variant={h2} style={{ color: theme.colors.white }}>
        {highlightFirstLetters(t('ourChef.meetOurChefs'))}
      </Typography>
      <StyledOurChef>
        {ourChefs.map((chef) => (
          <StyledChefCard key={chef.name}>
            <StyledChefCardImage src={chef.img} alt={chef.alt} />
            <StyledChefCardOverlay>
              <Typography
                variant={h5}
                style={{ color: theme.colors.black.b1, fontWeight: 'bold' }}
              >
                {chef.name}
              </Typography>
              <Typography
                variant={lgText}
                style={{ color: theme.colors.black.b1 }}
              >
                {chef.position}
              </Typography>
            </StyledChefCardOverlay>
          </StyledChefCard>
        ))}
      </StyledOurChef>

      <Button rounded variant={BUTTON_VARIANT.tertiary}>
        {t('button.seeMore')}
      </Button>
    </StyledOurChefContainer>
  );
};

export default OurChef;
