import { Outlet } from 'react-router-dom';
import { Footer } from 'src/sections';
import Header from 'src/sections/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
