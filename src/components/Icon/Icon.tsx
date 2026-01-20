import { FunctionComponent, SVGProps } from 'react';
import { StyledSVGContainer } from './Icon.styled';

interface IconProps {
  className?: string;
  color?: string;
  hoverColor?: string;
  IconComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  size?: number;
}

const Icon = ({
  className,
  color,
  hoverColor,
  IconComponent,
  onClick,
  size = 24
}: IconProps) => {
  return (
    <StyledSVGContainer
      className={className}
      onClick={onClick}
      color={color}
      size={size}
      hoverColor={hoverColor}
    >
      <IconComponent />
    </StyledSVGContainer>
  );
};

export default Icon;
