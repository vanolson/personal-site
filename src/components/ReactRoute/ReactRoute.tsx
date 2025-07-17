import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Stuff from '../../pages/Stuff';

function ReactRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="stuff" element={<Stuff/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRoute;