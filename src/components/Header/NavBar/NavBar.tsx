import { useTranslation } from 'react-i18next';

import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import colors from 'src/theme/colors';
import spacings from 'src/theme/spacings';

const { h5, smText } = TYPOGRAPHY_CONSTANTS;
const { white } = colors;

const NabBarButtons = [
  'Home',
  'Menu',
  'Blog',
  'Pages',
  'About',
  'Shop',
  'Contact'
];

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: spacings.s48 }}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant={h5}>{t('bussiness.name')}</Typography>
      </div>

      <div>
        <ul
          style={{ listStyleType: 'none', display: 'flex', gap: spacings.s32 }}
        >
          {NabBarButtons.map((button, index) => (
            <li key={index}>
              <Typography variant={smText} style={{ color: white }}>
                {button}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
