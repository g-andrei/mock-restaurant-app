import { achievementBackground } from 'src/assets/Images';
import styled, { css } from 'styled-components';

export const StyledAchievementBackground = styled.div(() => {
  return css`
    position: relative;
    background-image: url(${achievementBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
    }

    > * {
      position: relative;
    }
  `;
});

export const StyledAchievementContainer = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    width: 100%;
    display: flex;
    padding: ${spacings.s110} ${spacings.s300};
    justify-content: space-between;
  `;
});

export const StyledAchievementItem = styled.div(({ theme }) => {
  const { spacings } = theme;

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s24};
  `;
});
