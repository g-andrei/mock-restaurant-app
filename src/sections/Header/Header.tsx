import { StyledHeaderContainer } from './Header.styled';
import HeaderBody from './HeaderBody/HeaderBody';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <NavBar />
      <HeaderBody />
    </StyledHeaderContainer>
    
  );
};

export default Header;
