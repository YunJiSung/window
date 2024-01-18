// import React from 'react';
// import Icon from './Icon';
// import Footer from './Footer';
// import Layer from './Layer';

// function MainIntro() {
//   return (
//     <div id="mainIntro">
//       <div className="wallpapers">
//         <Icon imgSrc="img/intro.png" alt="intro" title="내 컴퓨터" className="introIcon" />
//         <Icon imgSrc="img/youtube.png" alt="youtube" title="나만의 유튜브" className="youtubeIcon" />
//         <Icon imgSrc="img/netflix.png" alt="netflix" title="영화 리스트" className="movieIcon" />
//         <Icon imgSrc="img/react.png" alt="reactIcon" title="리액트 블로그" className="reactIcon" />
//         <Icon imgSrc="img/vue.png" alt="reactIcon" title="뷰 블로그" className="vueIcon" />
//         <Icon imgSrc="img/vite.png" alt="reactIcon" title="뷰 블로그" className="viteIcon" />
//       </div>

//       <Footer />

//       {/* Layers */}
//       <Layer type="aboutLayer" className="layer1 aboutLayer none" />
//       <Layer type="youtubeLayer" className="layer2 youtube" />
//       <Layer type="reactLayer" className="layer3 react" />
//     </div>
//   );
// }

// export default MainIntro;



// import React, { useState, useRef } from 'react';
// import gsap from 'gsap';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';
// import Icon from './Icon';
// import Footer from './Footer';

// function MainIntro() {
//   const [activeLayer, setActiveLayer] = useState('');
//   const aboutLayerRef = useRef(null);
//   const youtubeLayerRef = useRef(null);
//   const reactLayerRef = useRef(null);

//   const toggleLayer = (layerRef) => {
//     if (activeLayer === layerRef) {
//       gsap.to(layerRef.current, { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//       setActiveLayer(null);
//     } else {
//       gsap.to(".layer", { autoAlpha: 0, y: 20, backdropFilter: 'blur(0px)', duration: 0.5 });
//       gsap.to(layerRef.current, { autoAlpha: 1, y: 0, backdropFilter: 'blur(10px)', duration: 0.5 });
//       setActiveLayer(layerRef);
//     }
//   };

//   return (
//     <div id="mainIntro">
//       <div className="wallpapers">
//         <Icon imgSrc="img/intro.png" alt="intro" title="내 컴퓨터" className="introIcon" onClick={() => toggleLayer(aboutLayerRef)} />
//         <Icon imgSrc="img/youtube.png" alt="youtube" title="나만의 유튜브" className="youtubeIcon" onClick={() => toggleLayer(youtubeLayerRef)} />
//         <Icon imgSrc="img/netflix.png" alt="netflix" title="영화 리스트" className="movieIcon" />
//         <Icon imgSrc="img/react.png" alt="reactIcon" title="리액트 블로그" className="reactIcon" onClick={() => toggleLayer(reactLayerRef)} />
//         {/* 여기에 추가적인 아이콘을 배치할 수 있습니다. */}
//       </div>

//       <Footer />

//       <div ref={aboutLayerRef} className="layer layer1 aboutLayer">
//         <AboutLayer />
//         <div className="layer__footer">
//           <span className="close" onClick={() => toggleLayer(aboutLayerRef)}></span>
//         </div>
//       </div>

//       <div ref={youtubeLayerRef} className="layer layer2 youtubeLayer">
//         <YoutubeLayer onClose={() => toggleLayer(youtubeLayerRef)} />
//       </div>

//       <div ref={reactLayerRef} className="layer layer3 reactLayer">
//         <ReactLayer onClose={() => toggleLayer(reactLayerRef)} />
//       </div>
//     </div>
//   );
// }

// export default MainIntro;



































































//최근 사용 코드
import React from 'react';
import Icon from './Icon';
import Footer from './Footer';
import AboutLayer from './AboutLayer';
import YoutubeLayer from './YoutubeLayer';
import ReactLayer from './ReactLayer';

function MainIntro() {
  return (
    <div id="mainIntro">
      <div className="wallpapers">
        <Icon imgSrc="img/intro.png" alt="intro" title="내 컴퓨터" className="introIcon" />
        <Icon imgSrc="img/youtube.png" alt="youtube" title="나만의 유튜브" className="youtubeIcon" />
        <Icon imgSrc="img/netflix.png" alt="netflix" title="영화 리스트" className="movieIcon" />
        <Icon imgSrc="img/react.png" alt="reactIcon" title="리액트 블로그" className="reactIcon" />
        <Icon imgSrc="img/vue.png" alt="reactIcon" title="뷰 블로그" className="vueIcon" />
        <Icon imgSrc="img/vite.png" alt="reactIcon" title="뷰 블로그" className="viteIcon" />
      </div>

      <Footer />

      {/* Layers */}
      <AboutLayer />
      <YoutubeLayer />
      <ReactLayer />
    </div>
  );
}

export default MainIntro;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Icon from './Icon';
// import Footer from './Footer';

// function MainIntro() {
//   return (
//     <div id="mainIntro">
//       <div className="wallpapers">
//         <Icon imgSrc="img/intro.png" alt="intro" title="내 컴퓨터" className="introIcon" />
//         <Icon imgSrc="img/youtube.png" alt="youtube" title="나만의 유튜브" className="youtubeIcon" />
//         <Icon imgSrc="img/netflix.png" alt="netflix" title="영화 리스트" className="movieIcon" />
//         <Icon imgSrc="img/react.png" alt="reactIcon" title="리액트 블로그" className="reactIcon" />
//         <Icon imgSrc="img/vue.png" alt="vueIcon" title="뷰 블로그" className="vueIcon" />
//         <Icon imgSrc="img/vite.png" alt="viteIcon" title="뷰 블로그" className="viteIcon" />
//       </div>

//       <nav>
//         <Link to="/about">About</Link>
//         <Link to="/youtube">YouTube Layer</Link>
//         <Link to="/react">React Layer</Link>
//       </nav>

//       <Footer />
//     </div>
//   );
// }

// export default MainIntro;







// import React, { useState } from 'react';
// import Icon from './Icon';
// import AboutLayer from './AboutLayer';
// import YoutubeLayer from './YoutubeLayer';
// import ReactLayer from './ReactLayer';
// import Footer from './Footer';
// // import MovieLayer from './MovieLayer';
// // import VueLayer from './VueLayer';
// // import ViteLayer from './ViteLayer';

// function MainIntro() {
//   const [activeLayer, setActiveLayer] = useState(null);

//   const handleIconClick = (layerName) => {
//     setActiveLayer(layerName);
//   };

//   return (
//     <div id="mainIntro">
//       <div className="wallpapers">
//         <Icon imgSrc="img/intro.png" alt="intro" title="내 컴퓨터" className="introIcon" onClick={() => handleIconClick('about')} />
//         <Icon imgSrc="img/youtube.png" alt="youtube" title="나만의 유튜브" className="youtubeIcon" onClick={() => handleIconClick('youtube')} />
//         <Icon imgSrc="img/netflix.png" alt="netflix" title="영화 리스트" className="movieIcon" onClick={() => handleIconClick('movie')} />
//         <Icon imgSrc="img/react.png" alt="react" title="리액트 블로그" className="reactIcon" onClick={() => handleIconClick('react')} />
//         <Icon imgSrc="img/vue.png" alt="vue" title="뷰 블로그" className="vueIcon" onClick={() => handleIconClick('vue')} />
//         <Icon imgSrc="img/vite.png" alt="vite" title="뷰 블로그" className="viteIcon" onClick={() => handleIconClick('vite')} />
//       </div>
//       <Footer />

//       {activeLayer === 'about' && <AboutLayer />}
//       {activeLayer === 'youtube' && <YoutubeLayer />}
//       {/* {activeLayer === 'movie' && <MovieLayer />} */}
//       {activeLayer === 'react' && <ReactLayer />}
//       {/* {activeLayer === 'vue' && <VueLayer />}
//       {activeLayer === 'vite' && <ViteLayer />} */}
//     </div>
//   );
// }

// export default MainIntro;
