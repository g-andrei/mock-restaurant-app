import { CSSProperties, ReactNode } from 'react';
import typography from 'src/theme/typograpy';

export const Tags = {
  // headings
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',

  // text
  xsText: 'p',
  smText: 'p',
  mdText: 'p',
  lgText: 'p',

  // text bold
  xsTextBold: 'p',
  smTextBold: 'p',
  mdTextBold: 'p',
  lgTextBold: 'p',

  handText: 'p'
};

export type TagKeys = keyof typeof Tags;
export type TagValues = (typeof Tags)[TagKeys];

export interface TypographyProps {
  variant: keyof typeof typography;
  children?: ReactNode;
  style?: CSSProperties;
}
