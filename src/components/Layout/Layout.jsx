import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loading } from 'notiflix';

import { Filter } from 'components/Filter/Filter';

export const Layout = () => {
  return (
    <main>
      <Link to="/">Home</Link>
      <Filter />
      <Suspense fallback={Loading.dots()}>
        <Outlet />
      </Suspense>
    </main>
  );
};
