import { useTranslation } from 'react-i18next';

import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';

import { highlightFirstLetters } from 'src/utils/textHelpers';
import {
  StyledEmailInput,
  StyledSubscribeButton,
  StyledSubscribeContainer,
  StyledSubscribeForm,
  StyledSubscribeTextBlock
} from './Subscribe.styled';

const { h4, smText } = TYPOGRAPHY_CONSTANTS;

const Subscribe = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { colors } = theme;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add subscribe logic/API call
  };

  return (
    <StyledSubscribeContainer>
      <StyledSubscribeTextBlock>
        <Typography variant={h4} style={{ color: colors.white }}>
          {highlightFirstLetters(t('footerSubscribe.title'))}
        </Typography>
        <Typography variant={smText} style={{ color: colors.white }}>
          {t('footerSubscribe.description')}
        </Typography>
      </StyledSubscribeTextBlock>

      <StyledSubscribeForm onSubmit={handleSubmit}>
        <StyledEmailInput
          type="email"
          id="subscribe-email"
          name="email"
          placeholder={t('footerSubscribe.placeholder')}
        />
        <StyledSubscribeButton type="submit">
          {t('button.subscribe')}
        </StyledSubscribeButton>
      </StyledSubscribeForm>
    </StyledSubscribeContainer>
  );
};

export default Subscribe;
