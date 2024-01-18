// import React from 'react';
// import Search from './Search';
// import Menu from './Menu';

// function Footer() {
//   return (
//     <div className="footer__info">
//       <Search />
//       <Menu />
//       <div className="date"></div>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import Search from './Search';
import Menu from './Menu';

function Footer({ onMenuClick }) {
  return (
    <div className="footer__info">
      <Search />
      <Menu onMenuClick={onMenuClick} />
      <div className="date"></div>
    </div>
  );
}

export default Footer;