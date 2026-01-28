import { useTranslation } from 'react-i18next';
import { Button, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { BUTTON_VARIANT } from 'src/components/Button';
import { chefsMockData } from 'src/mocks';
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

  return (
    <StyledOurChefContainer>
      <Typography variant={handText} style={{ color: theme.colors.primary }}>
        {t('ourChef.title')}
      </Typography>
      <Typography variant={h2} style={{ color: theme.colors.white }}>
        {highlightFirstLetters(t('ourChef.meetOurChefs'))}
      </Typography>
      <StyledOurChef>
        {chefsMockData.map((chef) => (
          <StyledChefCard key={chef.name}>
            <StyledChefCardImage src={chef.img} alt={t(chef.alt)} />
            <StyledChefCardOverlay>
              <Typography
                variant={h5}
                style={{ color: theme.colors.black.b1, fontWeight: 'bold' }}
              >
                {t(chef.name)}
              </Typography>
              <Typography
                variant={lgText}
                style={{ color: theme.colors.black.b1 }}
              >
                {t(chef.position)}
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
