import { useTranslation } from 'react-i18next';
import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import { useTheme } from 'styled-components';
import { StyledLogoLink } from './Logo.styled';

const { h5 } = TYPOGRAPHY_CONSTANTS;

const Logo = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledLogoLink to="/">
      <Typography variant={h5} style={{ color: theme.colors.white }}>
        {highlightFirstLetters(t('bussiness.name'), 4)}
      </Typography>
    </StyledLogoLink>
  );
};

export default Logo;
