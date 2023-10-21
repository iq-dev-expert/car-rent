import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/catalog" element={<Layout />}>
        <Route index element={<CatalogPage />} />
      </Route>
      <Route path="/favorites" element={<Layout />}>
        <Route index element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
