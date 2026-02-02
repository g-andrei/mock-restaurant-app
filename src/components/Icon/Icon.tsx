import { FunctionComponent, SVGProps } from 'react';
import { StyledSVGContainer } from './Icon.styled';

type IconSize = number | [width: number, height: number];

interface IconProps {
  className?: string;
  color?: string;
  hoverColor?: string;
  IconComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  size?: IconSize;
}

const Icon = ({
  className,
  color,
  hoverColor,
  IconComponent,
  onClick,
  size = 24
}: IconProps) => {
  const [width, height] =
    typeof size === 'number' ? [size, size] : [size[0], size[1]];

  return (
    <StyledSVGContainer
      className={className}
      onClick={onClick}
      color={color}
      width={width}
      height={height}
      hoverColor={hoverColor}
    >
      <IconComponent />
    </StyledSVGContainer>
  );
};

export default Icon;
