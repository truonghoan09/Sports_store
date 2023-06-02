import { Outlet } from 'react-router-dom';
import Header from '../Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
