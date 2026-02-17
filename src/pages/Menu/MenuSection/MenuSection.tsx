import { Coffee } from 'src/assets/Icons';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';
import {
  StyledMenuItem,
  StyledMenuItemDetails,
  StyledMenuItemName,
  StyledMenuSection,
  StyledMenuSectionContent,
  StyledMenuSectionHeader,
  StyledMenuSectionImage
} from './MenuSection.styled';

const { h2, h5, smText } = TYPOGRAPHY_CONSTANTS;

export interface MenuItem {
  name: string;
  description: string;
  kCal: number;
  price: number;
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  decorativeImg: string;
  reverse?: boolean;
}

const MenuSection = ({
  title,
  items,
  decorativeImg,
  reverse = false
}: MenuSectionProps) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <StyledMenuSection $isReverse={reverse}>
      <StyledMenuSectionContent>
        <StyledMenuSectionHeader>
          <Icon IconComponent={Coffee} />
          <Typography variant={h2} style={{ color: colors.grey.g1 }}>
            {title}
          </Typography>
        </StyledMenuSectionHeader>

        {items.map((item, index) => (
          <StyledMenuItem key={index}>
            <StyledMenuItemDetails>
              <StyledMenuItemName>
                <Typography variant={h5}>{item.name}</Typography>
              </StyledMenuItemName>
              <Typography variant={smText} style={{ color: colors.grey.g2 }}>
                {item.description}
              </Typography>
              <Typography variant={smText} style={{ color: colors.grey.g3 }}>
                {item.kCal}
              </Typography>
            </StyledMenuItemDetails>
            <Typography variant={h5} style={{ color: colors.primary }}>
              {item.price}$
            </Typography>
          </StyledMenuItem>
        ))}
      </StyledMenuSectionContent>

      <StyledMenuSectionImage src={decorativeImg} alt={title} />
    </StyledMenuSection>
  );
};

export default MenuSection;
