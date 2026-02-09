import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaceBook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube
} from 'src/assets/Icons';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';
import {
  StyledCopyrightbarContaienr,
  StyledSocialIconSquare,
  StyledSocialIconsWrapper
} from './CopyrightBar.styled';

const { smText } = TYPOGRAPHY_CONSTANTS;

const CopyrightBar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { colors } = theme;
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <StyledCopyrightbarContaienr $isHomePage={isHomePage}>
      <Typography variant={smText} style={{ color: theme.colors.white }}>
        {t('footer.copyright')}
      </Typography>

      <StyledSocialIconsWrapper>
        <StyledSocialIconSquare>
          <Icon IconComponent={FaceBook} color={colors.grey.g2} size={18} />
        </StyledSocialIconSquare>
        <StyledSocialIconSquare>
          <Icon IconComponent={Twitter} color={colors.grey.g2} size={18} />
        </StyledSocialIconSquare>
        <StyledSocialIconSquare>
          <Icon IconComponent={Instagram} color={colors.grey.g2} size={18} />
        </StyledSocialIconSquare>
        <StyledSocialIconSquare>
          <Icon IconComponent={YouTube} color={colors.grey.g2} size={18} />
        </StyledSocialIconSquare>
        <StyledSocialIconSquare>
          <Icon IconComponent={Pinterest} color={colors.grey.g2} size={18} />
        </StyledSocialIconSquare>
      </StyledSocialIconsWrapper>
    </StyledCopyrightbarContaienr>
  );
};

export default CopyrightBar;
