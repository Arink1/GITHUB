import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLinks({ setHoverItem, setIsExpanded }) {
  // Define navigation links with explicit paths
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="navbar-nav d-flex flex-row justify-content-around">
      {links.map(({ name, path }) => (
        // Add mx-sm-2 for margin on small screens
        <div key={name} className="nav-item mx-1 mx-sm-2" onMouseEnter={() => { setHoverItem(name); setIsExpanded(true); }} onMouseLeave={() => setIsExpanded(false)}>
          <Link to={path} className="nav-link">{name}</Link>
        </div>
      ))}
    </div>
  );
}

export default HeaderLinks;
