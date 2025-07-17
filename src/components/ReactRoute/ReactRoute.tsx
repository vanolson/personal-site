import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MarkdownPage from '../MarkdownPage/MarkdownPage';

function ReactRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route index element={<MarkdownPage />} />
          <Route path="/:slug" element={<MarkdownPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoute;
