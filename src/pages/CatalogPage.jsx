import { useCars } from 'hooks/useCars';
import { useEffect } from 'react';

export default function CatalogPage() {
  console.log('CatalogPage is call');

  const { fetchCars } = useCars();
  console.log(fetchCars);
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return <h1>CatalogPage</h1>;
}
