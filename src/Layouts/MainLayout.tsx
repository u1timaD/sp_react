import Logo from '../components/Logo/logo';
import Navigation from '../components/Navigation/Navigation';
import Header from './Header/Header';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
