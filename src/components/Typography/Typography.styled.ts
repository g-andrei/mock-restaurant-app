import typography from 'src/theme/typograpy';
import styled from 'styled-components';

interface StyledProps {
  variant: keyof typeof typography;
}

const StyledTypography = styled.span<StyledProps>`
  font-size: ${({ variant }) => typography[variant]?.fontSize || '16px'};
  line-height: ${({ variant }) => typography[variant]?.lineHeight || '24px'};
  font-family: ${({ variant }) =>
    typography[variant]?.fontFamily || 'sans-serif'};
  display: inline;
`;

export default StyledTypography;
