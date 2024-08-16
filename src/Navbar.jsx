import React, { useState, useEffect } from 'react';

function Navbar() {
    const [theme, setTheme] = useState('default');
    const themes = ['light', 'dark', 'retro', 'valentine', 'aqua', 'forest', 'cupcake', 'luxury', 'corporate']; // Array of themes
  const [themeIndex, setThemeIndex] = useState(0); // Default theme
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    const handleChange = () => {
      const nextThemeIndex = (themeIndex + 1) % themes.length;
      setThemeIndex(nextThemeIndex);
      setTheme(themes[nextThemeIndex]);
    };
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='/about'>About</a></li>
     </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='/'>Quizzify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='font-bold' href='/about'>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary" onClick={handleChange}>Change theme</a>
  </div>
</div>
  )
}

export default Navbar