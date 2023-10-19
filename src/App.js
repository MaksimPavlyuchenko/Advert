import { Routes, Route } from 'react-router-dom';

import CatalogPage from 'pages/CatalogPage';
import MainPage from 'pages/MainPage';
import FavoritesPage from 'pages/FavoritesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default App;
