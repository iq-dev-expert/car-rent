import { Link } from 'react-router-dom';

export default function HomePage() {
  console.log('HomePage is call');

  return (
    <>
      <Link to="/catalog">Catalog</Link>
      <br />
      <Link to="/favorites">Favorites</Link>
    </>
  );
}
