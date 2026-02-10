import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Button,
  BUTTON_VARIANT,
  Typography,
  TYPOGRAPHY_CONSTANTS
} from 'src/components';
import {
  StyledNotFoundContent,
  StyledNotFoundPageContainer,
  StyledNotFoundSubtitle,
  StyledNotFoundText,
  StyledNotFoundTitle
} from './NotFoundPage.styled';

const { h1, h4, mdText } = TYPOGRAPHY_CONSTANTS;
const { primary } = BUTTON_VARIANT;

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <StyledNotFoundPageContainer>
      <StyledNotFoundTitle>
        <Typography variant={h1}>{t('notFound.404')}</Typography>
      </StyledNotFoundTitle>
      <StyledNotFoundContent>
        <StyledNotFoundSubtitle>
          <Typography variant={h4}>{t('notFound.title')}</Typography>
        </StyledNotFoundSubtitle>
        <StyledNotFoundText>
          <Typography variant={mdText}>{t('notFound.notFound')}</Typography>
        </StyledNotFoundText>
        <StyledNotFoundText>
          <Typography variant={mdText}>{t('notFound.while')}</Typography>
        </StyledNotFoundText>
      </StyledNotFoundContent>
      <Link to="/">
        <Button variant={primary}>{t('button.goHome')}</Button>
      </Link>
    </StyledNotFoundPageContainer>
  );
};

export default NotFoundPage;
