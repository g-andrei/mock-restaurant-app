import { ThemeProvider } from 'styled-components';
import colors from './colors';
import radii from './radii';
import spacings from './spacings';
import { ThemeInterfaces } from './theme';
import typography, { fontFamilies, fontSizes, lineHeights } from './typograpy';

interface ThemeProps {
  children: React.ReactNode;
}

const theme: ThemeInterfaces = {
  colors,
  spacings,
  radii,
  typography,
  fontSizes,
  lineHeights,
  fontFamilies
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
