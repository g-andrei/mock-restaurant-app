import { useTranslation } from 'react-i18next';
import { Check } from 'src/assets/Icons';
import { useTheme } from 'styled-components';

import { aboutUsEggs, aboutUsSandwich, aboutUsSauce } from 'src/assets/Images';

import { Button, Icon, Typography } from 'src/components';
import { TYPOGRAPHY_CONSTANTS } from 'src/components/Typography';
import { highlightFirstLetters } from 'src/utils/textHelpers';

import { Link } from 'react-router-dom';
import {
  StyledAboutUsContainer,
  StyledAboutUsLeft,
  StyledAboutUsRight,
  StyledCheckRow,
  StyledContentStack,
  StyledFullWidthImage,
  StyledHalfImagesRow,
  StyledHalfWidthImage,
  StyledTextStack
} from './AboutUs.styled';

const { smText, h2, handText } = TYPOGRAPHY_CONSTANTS;

const AboutUs = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const aboutUsCheckItems = ['aboutUs.text1', 'aboutUs.text2', 'aboutUs.text3'];

  return (
    <StyledAboutUsContainer>
      <StyledAboutUsLeft>
        <Typography variant={handText} style={{ color: theme.colors.primary }}>
          {t('aboutUs')}
        </Typography>

        <StyledContentStack>
          <Typography variant={h2}>
            {highlightFirstLetters(t('aboutUs.title'))}
          </Typography>

          <StyledTextStack>
            <Typography variant={smText}>{t('aboutUs.bodyText')}</Typography>

            {aboutUsCheckItems.map((key) => (
              <StyledCheckRow key={key}>
                <Icon IconComponent={Check} />
                <Typography variant={smText}>{t(key)}</Typography>
              </StyledCheckRow>
            ))}
          </StyledTextStack>

          <div>
            <Link to="/menu">
              <Button rounded>{t('button.seeMenu')}</Button>
            </Link>
          </div>
        </StyledContentStack>
      </StyledAboutUsLeft>

      <StyledAboutUsRight>
        <StyledFullWidthImage src={aboutUsEggs} alt="About us eggs" />

        <StyledHalfImagesRow>
          <StyledHalfWidthImage src={aboutUsSauce} alt="About us sauce" />
          <StyledHalfWidthImage src={aboutUsSandwich} alt="About us sandwich" />
        </StyledHalfImagesRow>
      </StyledAboutUsRight>
    </StyledAboutUsContainer>
  );
};

export default AboutUs;
