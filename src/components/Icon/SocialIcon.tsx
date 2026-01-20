import colors from 'src/theme/colors';
import Icon from './Icon';
import { SocialPlatform } from './constants';
import { socialIconsMap } from './socialIconsMap';

import styles from './SocialIcon.module.css';

interface SocialIconProps {
  platform: SocialPlatform;
  withBackground?: boolean;
  onClick?: () => void;
  className?: string;
}

const { primary, grey } = colors;

const SocialIcon = ({
  platform,
  withBackground = false,
  onClick,
  className
}: SocialIconProps) => {
  const IconComponent = socialIconsMap[platform];

  return (
    <div
      className={`${styles['social-icon']} ${
        withBackground ? styles['social-icon--with-bg'] : ''
      }`}
      onClick={onClick}
    >
      <Icon
        IconComponent={IconComponent}
        size={24}
        color={withBackground ? grey.g2 : ''}
        hoverColor={primary}
        className={className}
      />
    </div>
  );
};

export default SocialIcon;
