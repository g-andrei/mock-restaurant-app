import { TypographyProps } from './types';
import StyledTypography from './Typography.styled';

const Typography = ({
  variant = 'mdText',
  children,
  style
}: TypographyProps) => {
  return (
    <StyledTypography variant={variant} style={style}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
