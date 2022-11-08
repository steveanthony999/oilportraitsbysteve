import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link to='/blog'>Blog</Link>
        <div className='marquee'>
          <h1>Oil Portraits</h1>
          <h2>By Steve</h2>
        </div>
        <Link to='/order'>Order</Link>
      </div>
    </nav>
  );
};

export default Navbar;
