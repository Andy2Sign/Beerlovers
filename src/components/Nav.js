import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  
    const navStyle = {
        color: 'whitesmoke',
        textDecoration: 'none'
    
        
    }
  

  return (
    <nav>
    <div>
    <Link style={navStyle} to="/">
      <h3>
          <em>L</em>o<em>G</em>o
      </h3>
      </Link>
      </div>
      <div>
      <ul className="nav-links">
      <Link style={navStyle} to="./components/ProductsList">
          <li className="links">ProductsList</li>
          </Link>
          <Link style={navStyle} to="./components/MyCart">
          <li className="links">MyCart</li>
          </Link>
          <Link style={navStyle} to="./components/Blog">
          <li className="links">Blog</li>
          </Link>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
