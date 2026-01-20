import 'styled-components';

interface Item<T> {
  [key: string]: T;
}
export interface Colors {
  primary: string;
  secondary: string;
  white: string;
  background: string;
  state: Item<string>;
  black: Item<string>;
  grey: Item<string>;
}

export type Spacings = Record<string, string>;

export type Radii = Record<string, string>;

export interface TypographyEntry {
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  fontWeight?: string;
}

export interface TypographyEntryMap {
  // headings
  h1: TypographyEntry;
  h2: TypographyEntry;
  h3: TypographyEntry;
  h4: TypographyEntry;
  h5: TypographyEntry;
  h6: TypographyEntry;

  // text
  xsText: TypographyEntry;
  smText: TypographyEntry;
  mdText: TypographyEntry;
  lgText: TypographyEntry;

  // text bold
  xsTextBold: TypographyEntry;
  smTextBold: TypographyEntry;
  mdTextBold: TypographyEntry;
  lgTextBold: TypographyEntry;

  // custom entry
  handText: TypographyEntry;
}

export interface FontSizes {
  heading: Item<string>;
  text: Item<string>;
}

export interface LineHeights {
  heading: Item<string>;
  text: Item<string>;
}
export interface FontFamilies {
  heading: string;
  text: string;
  handText: string;
}

export interface ThemeInterfaces {
  colors: Colors;
  spacings: Spacings;
  radii: Radii;
  typography: TypographyEntryMap;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  fontFamilies: FontFamilies;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterfaces {}
}
