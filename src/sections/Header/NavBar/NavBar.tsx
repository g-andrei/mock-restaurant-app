import { useTranslation } from "react-i18next";

import { Hand_bag, MagnifyingGlass } from "src/assets/Icons";
import { Icon, Typography } from "src/components";
import { TYPOGRAPHY_CONSTANTS } from "src/components/Typography";

import { highlightFirstLetters } from "src/utils/textHelpers";
import {
  StyledBrandText,
  StyledDropdownCaret,
  StyledNavBarContainer,
  StyledNavLink,
  StyledNavLinks,
  StyledRightSection,
  StyledSearchContainer,
  StyledSearchInput,
} from "./NavBar.styled";

const { smText ,h5} = TYPOGRAPHY_CONSTANTS;

const NavBarButtons = [
  { label: "Home", isActive: true },
  { label: "Menu" },
  { label: "Blog" },
  { label: "Pages" },
  { label: "About", hasDropdown: true },
  { label: "Shop" },
  { label: "Contact" },
];

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavBarContainer>
      <div style={{ textAlign: "center" }}>
        <Typography variant={h5} style={{ color: "#FFFFFF" }}>
          <StyledBrandText>
            {highlightFirstLetters(t("bussiness.name"), 4)}
          </StyledBrandText>
        </Typography>
      </div>

      <div style={{ display: "flex" }}>
        <StyledNavLinks>
          {NavBarButtons.map((button, index) => (
            <StyledNavLink
              key={index}
              $isActive={button.isActive}
              $hasDropdown={button.hasDropdown}
            >
              <Typography variant={smText} style={{ color: "#FFFFFF" }}>
                {button.label}
              </Typography>
              {button.hasDropdown && <StyledDropdownCaret />}
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
