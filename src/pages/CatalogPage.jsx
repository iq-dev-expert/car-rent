import { useEffect } from 'react';
import { Loading } from 'notiflix';

import { useCars } from 'hooks/useCars';

import { CatalogItem } from 'components/CatalogItem/CatalogItem';

export default function CatalogPage() {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();

    Loading.remove();
  }, [fetchCars]);

  return (
    <ul>
      {cars.map(car => (
        <CatalogItem car={car} key={car.id} />
      ))}
    </ul>
  );
}
