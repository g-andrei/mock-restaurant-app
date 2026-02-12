import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Button,
  BUTTON_VARIANT,
  Typography,
  TYPOGRAPHY_CONSTANTS
} from 'src/components';
import { useTheme } from 'styled-components';
import {
  StyledUnderConstructionButtons,
  StyledUnderConstructionContainer,
  StyledUnderConstructionContent
} from './UnderConstruction.styled';

const { h1, h4, mdText } = TYPOGRAPHY_CONSTANTS;
const { primary, secondary } = BUTTON_VARIANT;

const UnderConstruction = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { colors } = theme;

  return (
    <StyledUnderConstructionContainer>
      <Typography variant={h1} style={{ color: colors.primary }}>
        {t('underConstruction.title')}
      </Typography>
      <StyledUnderConstructionContent>
        <Typography variant={h4} style={{ color: colors.grey.g1 }}>
          {t('underConstruction.oops')}
        </Typography>

        <Typography variant={mdText} style={{ color: colors.grey.g2 }}>
          {t('underConstruction.message')}
        </Typography>
      </StyledUnderConstructionContent>
      <StyledUnderConstructionButtons>
        <Link to="/menu">
          <Button variant={primary}>{t('button.viewMenu')}</Button>
        </Link>

        <Link to="/">
          <Button variant={secondary}>{t('button.backHome')}</Button>
        </Link>
      </StyledUnderConstructionButtons>
    </StyledUnderConstructionContainer>
  );
};

export default UnderConstruction;
