import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../Layout/Layout';

function ReactRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personal-site" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoute;
