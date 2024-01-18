// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';


// function Layer({ type }) {
//   const renderLayerContent = () => {
//     switch (type) {
//       case 'aboutLayer':
//         return <AboutLayer />;
//       case 'youtubeLayer':
//         return <YoutubeLayer />;
//       case 'reactLayer':
//         return <ReactLayer />;
//       default:
//         return <div>Unknown Layer</div>;
//     }
//   };

//   return (
//     <>
//       {renderLayerContent()}
//     </>
//   );
// }

// export default Layer;


// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';

// function Layer({ type }) {
//   // 레이어 타입에 따라 적절한 컴포넌트를 렌더링
//   const renderLayerContent = () => {
//     switch (type) {
//       case 'aboutLayer':
//         return <AboutLayer />;
//       case 'youtubeLayer':
//         return <YoutubeLayer />;
//       case 'reactLayer':
//         return <ReactLayer />;
//       default:
//         return <div>Unknown Layer</div>;
//     }
//   };

//   return (
//     <div className={`layer ${type}`}>
//       {renderLayerContent()}
//     </div >
//   );
// }

// export default Layer;









// // Layer.js
// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';

// function Layer({ type }) {
//   // 레이어 컴포넌트를 렌더링하는 함수
//   const renderLayer = () => {
//     switch (type) {
//       case 'aboutLayer':
//         return <AboutLayer />;
//       case 'youtubeLayer':
//         return <YoutubeLayer />;
//       case 'reactLayer':
//         return <ReactLayer />;
//       // 다른 레이어 타입들을 여기에 추가할 수 있음
//       default:
//         return <div>Unknown Layer</div>;
//     }
//   };

//   return (
//     <div className={`layer ${type}`}>
//       {renderLayer()}
//     </div>
//   );
// }

// export default Layer;


// // Layer.jsx
// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';
// // 다른 레이어 컴포넌트들을 필요에 따라 import

// function Layer({ type }) {
//   // 레이어 타입에 따라 해당 컴포넌트를 렌더링하는 함수
//   const renderLayerContent = () => {
//     switch (type) {
//       case 'about':
//         return <AboutLayer />;
//       case 'youtube':
//         return <YoutubeLayer />;
//       case 'react':
//         return <ReactLayer />;
//       // 다른 레이어 타입에 대한 케이스를 추가할 수 있습니다.
//       default:
//         return null; // 타입이 일치하지 않을 경우 아무 것도 렌더링하지 않음
//     }
//   };


//   // 'type' prop을 기반으로 className을 구성합니다.
//   // 예: 'about'이면 'layer layer1 aboutLayer'가 됩니다.
//   return (
//     <div className={`layer layer1 ${type} Layer`}>
//       {renderLayerContent()}
//     </div >
//   );
// }

// export default Layer;





// // Layer.jsx
// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';

// function Layer() {
//   return (
//     <div>
//       <AboutLayer />
//       <YoutubeLayer />
//       <ReactLayer />

//     </div>
//   );
// }

// export default Layer;


// Layer.jsx
// import React from 'react';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';

// function Layer() {
//   return (
//     <>
//       <AboutLayer />
//       <YoutubeLayer />
//       <ReactLayer />
//     </>
//   );
// }

// export default Layer;

import React, { useState } from 'react';
import gsap from 'gsap';
import AboutLayer from './AboutLayer';
import YoutubeLayer from './YoutubeLayer';
import ReactLayer from './ReactLayer';
// ... 다른 레이어 import

function Layer() {
  const [activeLayer, setActiveLayer] = useState('');

  const toggleLayer = (layerName) => {
    setActiveLayer(layerName);
    // GSAP 로직으로 레이어 표시 및 숨김
  };

  return (
    <div>
      <AboutLayer isActive={activeLayer === 'about'} toggleLayer={toggleLayer} />
      <YoutubeLayer isActive={activeLayer === 'youtube'} toggleLayer={toggleLayer} />
      <ReactLayer isActive={activeLayer === 'react'} toggleLayer={toggleLayer} />
      {/* ... 다른 레이어 컴포넌트 */}
    </div>
  );
}

export default Layer;
