import React from 'react';

function Menu({ onMenuClick }) {
  return (
    <div className="menu">
      <ul>
        <li className="menu2" onClick={() => onMenuClick('menu')}><a href="#/"><img src="img/Logo@3x.png" alt="" /></a></li>
        <li className="menu3" onClick={() => onMenuClick('spotify')}><a href="#/"><img src="img/spotify.png" alt="" /></a></li>
        <li className="menu4" onClick={() => onMenuClick('newsfeed')}><a href="#/"><img src="img/newsfeed.png" alt="" /></a></li>
      </ul>
    </div>
  );
}

export default Menu;
