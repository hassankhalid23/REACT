import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        🎬 Movie Search App
      </Link>
    </nav>
  );
}

export default Navbar;