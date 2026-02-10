import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './i18n';
import { CartPage, HomePage, MenuPage, NotFoundPage } from './pages';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
