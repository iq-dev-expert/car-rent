import { useEffect } from 'react';

import { useCars } from 'hooks/useCars';

import { CatalogItem } from 'components/CatalogItem/CatalogItem';

export default function CatalogPage() {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <ul>
      {cars.map(car => (
        <CatalogItem car={car} key={car.id} />
      ))}
    </ul>
  );
}
