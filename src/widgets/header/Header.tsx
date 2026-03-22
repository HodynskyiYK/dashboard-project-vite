import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/details/1">Details</Link>
    </header>
  );
}
