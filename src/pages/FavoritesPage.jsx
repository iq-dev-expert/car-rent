import { Loading } from 'notiflix';
import { useEffect } from 'react';

export default function FavoritesPage() {
  useEffect(() => {
    Loading.remove();
  });

  return <h1>FavoritesPage</h1>;
}
