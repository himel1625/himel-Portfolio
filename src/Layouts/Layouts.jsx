import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layouts = () => {
  return (
    <div className='container mx-auto font-Roboto'>
      <header>
        <Navbar />
      </header>
      <main className='w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layouts;
