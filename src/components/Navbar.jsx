import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#111', color: '#fff' }}>
      <h2>Exotic Drive</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/carros" style={{ color: '#fff', textDecoration: 'none' }}>Carros</Link>
        <Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
      </div>
    </nav>
  );
}