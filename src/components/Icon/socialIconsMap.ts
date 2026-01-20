import {
  FaceBook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube
} from 'src/assets/Icons';
import { PLATFORMS, SocialPlatform } from './constants';

export const socialIconsMap: Record<
  SocialPlatform,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  [PLATFORMS.FACEBOOK]: FaceBook,
  [PLATFORMS.INSTAGRAM]: Instagram,
  [PLATFORMS.TWITTER]: Twitter,
  [PLATFORMS.PINTEREST]: Pinterest,
  [PLATFORMS.YOUTUBE]: YouTube
};
