import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { Hand_bag, MagnifyingGlass } from 'src/assets/Icons';
import { Icon, Typography } from 'src/components';
import { TYPOGRAPHY_CONSTANTS } from 'src/components/Typography';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import {
  StyledDropdownCaret,
  StyledNavBarContainer,
  StyledNavButton,
  StyledNavLink,
  StyledNavLinks,
  StyledRightSection,
  StyledSearchContainer,
  StyledSearchInput
} from './NavBar.styled';

const { smText, h5 } = TYPOGRAPHY_CONSTANTS;

const NavBarButtons = [
  { label: 'Home' },
  { label: 'Menu' },
  { label: 'Blog' },
  { label: 'Pages' },
  { label: 'About', hasDropdown: true },
  { label: 'Shop' },
  { label: 'Contact' }
];

const NavBar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeButton, setActiveButton] = useState<string>('Home');

  const handleButtonClick = (value: string) => {
    setActiveButton(value);
  };

  return (
    <StyledNavBarContainer>
      <div style={{ textAlign: 'center' }}>
        <Typography variant={h5} style={{ color: theme.colors.white }}>
          {highlightFirstLetters(t('bussiness.name'), 4)}
        </Typography>
      </div>

      <div style={{ display: 'flex' }}>
        <StyledNavLinks>
          {NavBarButtons.map((button, index) => (
            <StyledNavLink key={index}>
              <StyledNavButton
                $isActive={activeButton === button.label}
                onClick={() => handleButtonClick(button.label)}
              >
                <Typography
                  variant={smText}
                  style={{ color: theme.colors.white }}
                >
                  {button.label}
                </Typography>
                {button.hasDropdown && <StyledDropdownCaret />}
              </StyledNavButton>
            </StyledNavLink>
          ))}
        </StyledNavLinks>

        <StyledRightSection>
          <StyledSearchContainer>
            <StyledSearchInput type="text" placeholder="Search..." />
            <Icon IconComponent={MagnifyingGlass} size={18} />
          </StyledSearchContainer>
          <Icon IconComponent={Hand_bag} size={24} />
        </StyledRightSection>
      </div>
    </StyledNavBarContainer>
  );
};

export default NavBar;
