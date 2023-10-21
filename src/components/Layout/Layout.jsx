import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Filter } from 'components/Filter/Filter';

export const Layout = () => {
  return (
    <main>
      <Link to="/">Home</Link>
      <Filter />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};
