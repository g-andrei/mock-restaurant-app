import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import Theme from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      {/* <I18nextProvider i18n={i18next}> */}
      <App />
      {/* </I18nextProvider> */}
    </Theme>
  </StrictMode>
);
