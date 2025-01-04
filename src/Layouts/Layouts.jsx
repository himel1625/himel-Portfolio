import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layouts = () => {
  return (
    <div className='container mx-auto font-Roboto bg-white scroll-smooth'>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layouts;
