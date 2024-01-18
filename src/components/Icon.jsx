// import React from 'react';

// function Icon({ imgSrc, alt, title, className }) {
//   return (
//     <div className={`draggableIcon ${className}`}>
//       <img src={imgSrc} alt={alt} />
//       <span>{title}</span>
//     </div>
//   );
// }

// export default Icon;





import React from 'react';

function Icon({ imgSrc, alt, title, className, onClick }) {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      <span>{title}</span>
    </div>
  );
}

export default Icon;



// import React from 'react';

// function Icon({ imgSrc, alt, title, className, onClick }) {
//   return (
//     <div className={`draggableIcon ${className}`} onClick={onClick}>
//       <img src={imgSrc} alt={alt} />
//       <span>{title}</span>
//     </div>
//   );
// }


// export default Icon;