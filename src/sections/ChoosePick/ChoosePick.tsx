import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import { useTheme } from 'styled-components';

import { asparagusPlate } from 'src/assets/Images';
import menuMockData from 'src/mocks/ChoosePick/menu';
import {
  StyledButtonsContainer,
  StyledChoosePickContainer,
  StyledMenuHeroImage,
  StyledMenuItemDescription,
  StyledMenuItemPrice,
  StyledMenuItemRow,
  StyledMenuItemsGrid,
  StyledMenuItemText,
  StyledMenuItemThumb,
  StyledMenuLayout,
  StyledPickButton,
  StyledTitlesContainer
} from './ChoosePick.styled';

const { h2, handText, lgText, xsText, lgTextBold, mdTextBold } =
  TYPOGRAPHY_CONSTANTS;

const ChoosePick = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeButton, setActiveButton] = useState<string>('breackfast');

  const buttons = [
    { label: t('button.breakfast'), value: 'breackfast' },
    { label: t('button.lunch'), value: 'lunch' },
    { label: t('button.dinner'), value: 'dinner' },
    { label: t('button.dessert'), value: 'dessert' },
    { label: t('button.drink'), value: 'drink' },
    { label: t('button.snack'), value: 'snack' },
    { label: t('button.soups'), value: 'soups' }
  ];

  const handleButtonClick = (value: string) => {
    setActiveButton(value);
    // TODO: Add filter logic when API is ready
  };

  return (
    <StyledChoosePickContainer>
      <StyledTitlesContainer>
        <Typography variant={handText} style={{ color: theme.colors.primary }}>
          {t('choosePick.title')}
        </Typography>
        <Typography variant={h2} style={{ color: theme.colors.white }}>
          {highlightFirstLetters(t('choosePick.fromOurmenu'))}
        </Typography>
      </StyledTitlesContainer>

      <StyledButtonsContainer>
        {buttons.map((button) => (
          <StyledPickButton
            key={button.value}
            $isActive={activeButton === button.value}
            onClick={() => handleButtonClick(button.value)}
          >
            <Typography variant={lgText}>{button.label}</Typography>
          </StyledPickButton>
        ))}
      </StyledButtonsContainer>

      <StyledMenuLayout>
        <StyledMenuHeroImage src={asparagusPlate} alt="Asparagus salad" />

        <StyledMenuItemsGrid>
          {menuMockData.map((item) => (
            <StyledMenuItemRow key={item.id}>
              <StyledMenuItemThumb src={item.image} alt={item.name} />

              <StyledMenuItemText>
                <Typography variant={lgTextBold}>{item.name}</Typography>

                <StyledMenuItemDescription>
                  <Typography variant={xsText}>{item.description}</Typography>
                </StyledMenuItemDescription>

                <StyledMenuItemPrice>
                  <Typography variant={mdTextBold}>{item.price}</Typography>
                </StyledMenuItemPrice>
              </StyledMenuItemText>
            </StyledMenuItemRow>
          ))}
        </StyledMenuItemsGrid>
      </StyledMenuLayout>
    </StyledChoosePickContainer>
  );
};

export default ChoosePick;
