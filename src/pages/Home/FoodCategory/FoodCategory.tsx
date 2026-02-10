import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { categoryBurgers, categoryDesserts, categoryMain, categorySalads } from 'src/assets/Images';
import { Typography } from 'src/components';
import { TYPOGRAPHY_CONSTANTS } from 'src/components/Typography';
import { highlightFirstLetters } from 'src/utils/textHelpers';

import {
  StyledCardImage,
  StyledCardTagDiscount,
  StyledCardTagLabel,
  StyledCardTagsContainer,
  StyledFoodCategoryCard,
  StyledFoodCategoryCards,
  StyledFoodCategoryContainer,
  StyledFoodCategoryHeader,
  StyledFoodCategoryTitle
} from './FoodCategory.styled';

const { h2, handText, mdText, lgText } = TYPOGRAPHY_CONSTANTS;

const FoodCategory = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const categories = [
    {
      id: 'main',
      image: categoryMain,
      alt: t('foodCategory.mainAlt'),
      hasDiscount: true,
      discountValue: 30,
      label: t('foodCategory.mainLabel')
    },
    {
      id: 'burgers',
      image: categoryBurgers,
      alt: t('foodCategory.burgersAlt')
    },
    {
      id: 'salads',
      image: categorySalads,
      alt: t('foodCategory.saladsAlt')
    },
    {
      id: 'desserts',
      image: categoryDesserts,
      alt: t('foodCategory.dessertsAlt')
    }
  ];

  return (
    <StyledFoodCategoryContainer>
      <StyledFoodCategoryHeader>
        <Typography variant={handText} style={{ color: theme.colors.primary }}>
          {t('foodCategory.subtitle')}
        </Typography>
        <StyledFoodCategoryTitle>
          <Typography variant={h2} style={{ color: theme.colors.white }}>
            {highlightFirstLetters(t('foodCategory.title'), 2)}
          </Typography>
        </StyledFoodCategoryTitle>
      </StyledFoodCategoryHeader>

      <StyledFoodCategoryCards>
        {categories.map((category) => (
          <StyledFoodCategoryCard key={category.id}>
            <StyledCardImage src={category.image} alt={category.alt} />
            {category.hasDiscount && (
              <StyledCardTagsContainer>
                <StyledCardTagDiscount>
                  <Typography variant={mdText} style={{ color: theme.colors.primary }}>
                    {t('foodCategory.discount', { discount: category.discountValue })}
                  </Typography>
                </StyledCardTagDiscount>
                <StyledCardTagLabel>
                  <Typography variant={lgText} style={{ color: theme.colors.white }}>
                    {category.label}
                  </Typography>
                </StyledCardTagLabel>
              </StyledCardTagsContainer>
            )}
          </StyledFoodCategoryCard>
        ))}
      </StyledFoodCategoryCards>
    </StyledFoodCategoryContainer>
  );
};

export default FoodCategory;
