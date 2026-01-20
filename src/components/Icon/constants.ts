export const PLATFORMS = {
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TWITTER: 'twitter',
  PINTEREST: 'pinterest',
  YOUTUBE: 'youtube'
} as const;

export type SocialPlatform = (typeof PLATFORMS)[keyof typeof PLATFORMS];
