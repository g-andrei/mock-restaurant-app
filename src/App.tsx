import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES_CONSTANTS } from './constants/routes';
import './i18n';
import { HomePage, MenuPage, NotFoundPage, UnderConstruction } from './pages';

import './index.css';

const underConstructionRoutes = Object.keys(ROUTES_CONSTANTS).map((path) =>
  path.replace(/^\//, '')
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="menu" element={<MenuPage />} />

          {/* <Route path="cart" element={<CartPage />} />  */}

          {underConstructionRoutes.map((route) => (
            <Route key={route} path={route} element={<UnderConstruction />} />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
