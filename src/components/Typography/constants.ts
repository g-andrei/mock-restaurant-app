export const TYPOGRAPHY_CONSTANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',

  xsText: 'xsText',
  smText: 'smText',
  mdText: 'mdText',
  lgText: 'lgText',

  xsTextBold: 'xsTextBold',
  smTextBold: 'smTextBold',
  mdTextBold: 'mdTextBold',
  lgTextBold: 'lgTextBold',

  handText: 'handText'
} as const;

export type VariantKey = keyof typeof TYPOGRAPHY_CONSTANTS;
