import { useTranslation } from 'react-i18next';
import { Button, BUTTON_VARIANT, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import { useTheme } from 'styled-components';
import {
  StyledActiveProcessBackground,
  StyledActiveProcessContainer,
  StyledActiveProcessContent,
  StyledActiveProcessTextBlock
} from './ActiveProcess.styled';

const { handText, h2, smText } = TYPOGRAPHY_CONSTANTS;

const ActiveProcess = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledActiveProcessBackground>
      <StyledActiveProcessContainer>
        <StyledActiveProcessContent>
          <Typography
            variant={handText}
            style={{ color: theme.colors.primary }}
          >
            {t('activeProcess.title')}
          </Typography>

          <StyledActiveProcessTextBlock>
            <Typography variant={h2} style={{ color: theme.colors.white }}>
              {highlightFirstLetters(t('activeProcess.heading'), 2)}
            </Typography>
            <Typography variant={smText} style={{ color: theme.colors.white }}>
              {t('activeProcess.bodyText')}
            </Typography>

            {/* TODO: Add redirect to blog page */}
            <Button rounded variant={BUTTON_VARIANT.tertiary}>
              {t('button.readMore')}
            </Button>
          </StyledActiveProcessTextBlock>
        </StyledActiveProcessContent>
      </StyledActiveProcessContainer>
    </StyledActiveProcessBackground>
  );
};

export default ActiveProcess;
