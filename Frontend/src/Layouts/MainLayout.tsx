import { Outlet } from 'react-router-dom';
import Navbar from '../Components/UI/Navigation/Navbar';
import Footer from '../Components/UI/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
