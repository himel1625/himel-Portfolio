import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import NotFound from './Pages/Error/NotFound';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Router path='/about-me' element={} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
