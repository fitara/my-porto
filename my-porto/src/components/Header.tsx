import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <a href='/' className='header-title'>
        Fit.
      </a>
      <button className='menu-icon' onClick={toggle}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>

      <nav>
        <ul className={`header-links ${menuOpen ? "visible" : ""}`}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Projects</a>
          </li>
          <li>
            <a href='/'>Playground</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;