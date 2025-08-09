import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px', 
      backgroundColor: '#f0f0f0',
      marginBottom: '20px' 
    }}>
      <Link to="/" style={{ margin: '0 10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
