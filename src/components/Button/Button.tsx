import { Typography } from '..';
import { StyledButton } from './Button.styled';
import { BUTTON_VARIANT } from './constants';

interface ButtonProps {
  children: React.ReactNode;
  rounded?: boolean;
  variant?: string;
}

const Button = ({
  children,
  rounded,
  variant = BUTTON_VARIANT.primary
}: ButtonProps) => {
  return (
    <StyledButton rounded={rounded} variant={variant}>
      <Typography variant="smText">{children}</Typography>
    </StyledButton>
  );
};

export default Button;
