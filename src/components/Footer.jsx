import React from 'react';
import Search from './Search';
import Menu from './Menu';

function Footer() {
  return (
    <div className="footer__info">
      <Search />
      <Menu />
      <div className="date"></div>
    </div>
  );
}

export default Footer;
