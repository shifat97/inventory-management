import { NavMenuItem } from './NavMenuItem';

import './Navbar.css';

export function Navbar() {
  const isAuthenticated = true;
  const navItems = ['Products', 'Contact', 'Blog'];

  return (
    <div className="navbar">
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-menu">
        {navItems.map((navItem) => (
          <NavMenuItem key={navItem} title={navItem} />
        ))}
        {isAuthenticated ? <button>Logout</button> : <button>Login</button>}
      </div>
    </div>
  );
}
