import { useTranslation } from 'react-i18next';
import { Chef, Food, Pizza, Silverware } from 'src/assets/Icons';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';

import { useTheme } from 'styled-components';
import {
  StyledAchievementBackground,
  StyledAchievementContainer,
  StyledAchievementItem
} from './Achievement.styled';

const { h3, h5 } = TYPOGRAPHY_CONSTANTS;

const Achievement = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const achievements = [
    {
      icon: Chef,
      title: t('achievement.professionalChefs'),
      value: 420
    },
    {
      icon: Food,
      title: t('achievement.itemsOfFood'),
      value: 320
    },
    {
      icon: Silverware,
      title: t('achievement.yearsOfExperienced'),
      value: 30 + '+'
    },
    {
      icon: Pizza,
      title: t('achievement.happyCustomers'),
      value: 220
    }
  ];

  return (
    <StyledAchievementBackground>
      <StyledAchievementContainer>
        {achievements.map((achievement) => (
          <StyledAchievementItem key={achievement.title}>
            <Icon IconComponent={achievement.icon} size={120} />
            <Typography variant={h5} style={{ color: theme.colors.white }}>
              {achievement.title}
            </Typography>
            <Typography variant={h3} style={{ color: theme.colors.white }}>
              {achievement.value}
            </Typography>
          </StyledAchievementItem>
        ))}
      </StyledAchievementContainer>
    </StyledAchievementBackground>
  );
};

export default Achievement;
