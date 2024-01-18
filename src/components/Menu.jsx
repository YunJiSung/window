// import React from 'react';

// function Menu() {
//   return (
//     <div className="menu">
//       <ul>
//         <li className="menu2"><a href="#"><img src="img/Logo@3x.png" alt="" /></a></li>
//         <li className="menu3"><a href="#"><img src="img/spotify.png" alt="" /></a></li>
//         <li className="menu4"><a href="#"><img src="img/newsfeed.png" alt="" /></a></li>
//       </ul>
//     </div>
//   );
// }

// export default Menu;

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





// import React from 'react';

// function Menu({ onMenuClick }) {
//   return (
//     <div className="menu">
//       <button onClick={() => onMenuClick('item1')}>메뉴 1</button>
//       <button onClick={() => onMenuClick('item2')}>메뉴 2</button>
//       <button onClick={() => onMenuClick('item3')}>메뉴 3</button>
//       <button onClick={() => onMenuClick('item4')}>메뉴 4</button>

//     </div>
//   );
// }

// export default Menu;



// import React from 'react';

// function Menu({ onMenuSelect }) {
//   const handleMenuClick = (menuName) => {
//     // 상위 컴포넌트로부터 전달받은 함수를 호출
//     if (onMenuSelect) {
//       onMenuSelect(menuName);
//     }
//   };

//   return (
//     <div className="menu">
//       <ul>
//         <li className="menu2" onClick={() => handleMenuClick('logo')}><a href="#"><img src="img/Logo@3x.png" alt="" /></a></li>
//         <li className="menu3" onClick={() => handleMenuClick('spotify')}><a href="#"><img src="img/spotify.png" alt="" /></a></li>
//         <li className="menu4" onClick={() => handleMenuClick('newsfeed')}><a href="#"><img src="img/newsfeed.png" alt="" /></a></li>
//       </ul>
//     </div>
//   );
// }

// export default Menu;


