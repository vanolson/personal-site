import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Layout from '../Layout/Layout';
import MarkdownPage from '../MarkdownPage/MarkdownPage';
import Fun from '../Fun/Fun';

function ReactRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route index element={<MarkdownPage />} />
          <Route path="fun">
            <Route index element={<Fun />} />
            <Route path="*" element={<MarkdownPage />} />
          </Route>
          <Route path="*" element={<MarkdownPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoute;
