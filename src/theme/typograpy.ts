import { FontFamilies, FontSizes, LineHeights } from './theme';

export const fontSizes: FontSizes = {
  heading: {
    xs: '20px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '60px'
  },
  text: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '32px'
  }
};

export const fontFamilies: FontFamilies = {
  heading: 'Arimo, sans-serif',
  text: 'Inter, sans-serif',
  handText: 'Great Vibes, cursive'
};

export const lineHeights: LineHeights = {
  heading: {
    xs: '28px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
    xxl: '68px'
  },
  text: {
    xs: '22px',
    sm: '24px',
    md: '26px',
    lg: '28px',
    xl: '40px'
  }
};

const typography = {
  h1: {
    fontSize: fontSizes.heading.xxl,
    lineHeight: lineHeights.heading.xxl,
    fontFamily: fontFamilies.heading
  },
  h2: {
    fontSize: fontSizes.heading.xl,
    lineHeight: lineHeights.heading.xl,
    fontFamily: fontFamilies.heading
  },
  h3: {
    fontSize: fontSizes.heading.lg,
    lineHeight: lineHeights.heading.lg,
    fontFamily: fontFamilies.heading
  },
  h4: {
    fontSize: fontSizes.heading.md,
    lineHeight: lineHeights.heading.md,
    fontFamily: fontFamilies.heading
  },
  h5: {
    fontSize: fontSizes.heading.sm,
    lineHeight: lineHeights.heading.sm,
    fontFamily: fontFamilies.heading
  },
  h6: {
    fontSize: fontSizes.heading.xs,
    lineHeight: lineHeights.heading.xs,
    fontFamily: fontFamilies.heading
  },
  xsText: {
    fontSize: fontSizes.text.xs,
    lineHeight: lineHeights.text.xs,
    fontFamily: fontFamilies.text
  },
  xsTextBold: {
    fontSize: fontSizes.text.xs,
    lineHeight: lineHeights.text.xs,
    fontFamily: fontFamilies.text,
    fontWeight: 'bold'
  },
  smText: {
    fontSize: fontSizes.text.sm,
    lineHeight: lineHeights.text.sm,
    fontFamily: fontFamilies.text
  },
  smTextBold: {
    fontSize: fontSizes.text.sm,
    lineHeight: lineHeights.text.sm,
    fontFamily: fontFamilies.text,
    fontWeight: 'bold'
  },
  mdText: {
    fontSize: fontSizes.text.md,
    lineHeight: lineHeights.text.md,
    fontFamily: fontFamilies.text
  },
  mdTextBold: {
    fontSize: fontSizes.text.md,
    lineHeight: lineHeights.text.md,
    fontFamily: fontFamilies.text,
    fontWeight: 'bold'
  },
  lgText: {
    fontSize: fontSizes.text.lg,
    lineHeight: lineHeights.text.lg,
    fontFamily: fontFamilies.text
  },
  lgTextBold: {
    fontSize: fontSizes.text.lg,
    lineHeight: lineHeights.text.lg,
    fontFamily: fontFamilies.text,
    fontWeight: 'bold'
  },
  handText: {
    fontSize: fontSizes.text.xl,
    lineHeight: lineHeights.text.xl,
    fontFamily: fontFamilies.handText
  }
};
export default typography;
