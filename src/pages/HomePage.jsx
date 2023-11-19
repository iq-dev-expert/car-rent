import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>Hello world</h1>
      <Link to="/catalog">Catalog</Link>
      <br />
      <Link to="/favorites">Favorites</Link>
    </>
  );
}
