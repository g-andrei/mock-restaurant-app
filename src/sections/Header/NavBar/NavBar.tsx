import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Hand_bag, MagnifyingGlass, User } from 'src/assets/Icons';
import { Icon, Typography } from 'src/components';
import { TYPOGRAPHY_CONSTANTS } from 'src/components/Typography';
import {
  StyledDropdownCaret,
  StyledIconsSection,
  StyledNavBarContainer,
  StyledNavBarContent,
  StyledNavButton,
  StyledNavLink,
  StyledNavLinks,
  StyledRightSection,
  StyledSearchContainer,
  StyledSearchInput
} from './NavBar.styled';
import Logo from './Logo';

const { smText } = TYPOGRAPHY_CONSTANTS;

const NavBarButtons = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Pages', path: '/pages' },
  { label: 'About', path: '/about', hasDropdown: true },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' }
];

const NavBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  if (isHomePage) {
    return (
      <StyledNavBarContainer $isHomePage={isHomePage}>
        <div style={{ textAlign: 'center' }}>
          <Logo />
        </div>

        <div style={{ display: 'flex' }}>
          <StyledNavLinks>
            {NavBarButtons.map((button, index) => (
              <StyledNavLink key={index}>
                <Link to={button.path} style={{ textDecoration: 'none' }}>
                  <StyledNavButton $isActive={isActive(button.path)}>
                    <Typography
                      variant={smText}
                      style={{ color: theme.colors.white }}
                    >
                      {button.label}
                    </Typography>
                    {button.hasDropdown && <StyledDropdownCaret />}
                  </StyledNavButton>
                </Link>
              </StyledNavLink>
            ))}
          </StyledNavLinks>

          <StyledRightSection>
            <StyledSearchContainer>
              <StyledSearchInput type="text" placeholder="Search..." />
              <Icon IconComponent={MagnifyingGlass} size={18} />
            </StyledSearchContainer>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <Icon IconComponent={Hand_bag} size={24} />
            </Link>
          </StyledRightSection>
        </div>
      </StyledNavBarContainer>
    );
  }

  return (
    <StyledNavBarContainer $isHomePage={isHomePage}>
      <StyledNavBarContent>
        <Logo />

        <StyledNavLinks>
          {NavBarButtons.map((button, index) => (
            <StyledNavLink key={index}>
              <Link to={button.path} style={{ textDecoration: 'none' }}>
                <StyledNavButton $isActive={isActive(button.path)}>
                  <Typography
                    variant={smText}
                    style={{ color: theme.colors.white }}
                  >
                    {button.label}
                  </Typography>
                  {button.hasDropdown && <StyledDropdownCaret />}
                </StyledNavButton>
              </Link>
            </StyledNavLink>
          ))}
        </StyledNavLinks>

        <StyledIconsSection>
          <Icon IconComponent={MagnifyingGlass} size={24} />
          <Icon IconComponent={User} size={24} />
          <Link to="/cart">
            <Icon IconComponent={Hand_bag} size={24} />
          </Link>
        </StyledIconsSection>
      </StyledNavBarContent>
    </StyledNavBarContainer>
  );
};

export default NavBar;
