import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layouts = () => {
  return (
    <div>
      <div className=' mx-auto font-Roboto scroll-smooth bg-[#2d3748]'>
        <header>
          <Navbar />
        </header>

        <main className='container mx-auto '>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layouts;
