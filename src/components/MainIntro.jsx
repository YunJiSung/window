// 메뉴까지 됨
// import React, { useState } from 'react';
// import Icon from './Icon';
// import Footer from './Footer';
// import AboutLayer from './layer/AboutLayer';
// import YoutubeLayer from './layer/YoutubeLayer';
// import ReactLayer from './layer/ReactLayer';
// import MovieLayer from './layer/MovieLayer';
// import VueLayer from './layer/VueLayer';
// import ViteLayer from './layer/ViteLayer';


// function MainIntro() {
//   const [activeLayer, setActiveLayer] = useState('');

//   const toggleLayer = (layerName) => {
//     setActiveLayer(layerName === activeLayer ? '' : layerName);
//   };

//   // 메뉴 클릭 이벤트 처리
//   const handleMenuClick = (menuName) => {
//     toggleLayer(menuName);
//   };

//   return (
//     <div id="mainIntro">
//       <div className="wallpapers">
//         <Icon
//           imgSrc="img/intro.png"
//           alt="intro"
//           title="내 컴퓨터"
//           className="introIcon"
//           onClick={() => toggleLayer('about')}
//         />
//         <Icon
//           imgSrc="img/youtube.png"
//           alt="youtube"
//           title="나만의 유튜브"
//           className="youtubeIcon"
//           onClick={() => toggleLayer('youtube')}
//         />
//         <Icon
//           imgSrc="img/netflix.png"
//           alt="netflix"
//           title="영화 리스트"
//           className="movieIcon"
//           onClick={() => toggleLayer('movie')}
//         />
//         <Icon
//           imgSrc="img/react.png"
//           alt="reactIcon"
//           title="리액트 블로그"
//           className="reactIcon"
//           onClick={() => toggleLayer('react')}
//         />
//         <Icon
//           imgSrc="img/vue.png"
//           alt="vueIcon"
//           title="뷰 블로그"
//           className="vueIcon"
//           onClick={() => toggleLayer('vue')}
//         />
//         <Icon
//           imgSrc="img/vite.png"
//           alt="viteIcon"
//           title="비트 블로그"
//           className="viteIcon"
//           onClick={() => toggleLayer('vite')}
//         />
//       </div>

//       <Footer onMenuClick={handleMenuClick} />

//       {/* Layers */}
//       <AboutLayer isVisible={activeLayer === 'about'} toggleVisibility={() => toggleLayer('about')} />
//       <YoutubeLayer isVisible={activeLayer === 'youtube'} toggleVisibility={() => toggleLayer('youtube')} />
//       <MovieLayer isVisible={activeLayer === 'movie'} toggleVisibility={() => toggleLayer('movie')} />
//       <ReactLayer isVisible={activeLayer === 'react'} toggleVisibility={() => toggleLayer('react')} />
//       <VueLayer isVisible={activeLayer === 'vue'} toggleVisibility={() => toggleLayer('vue')} />
//       <ViteLayer isVisible={activeLayer === 'vite'} toggleVisibility={() => toggleLayer('vite')} />
//     </div>
//   );
// }

// export default MainIntro;




// 2024.01.22 가장 최근 코드
import React, { useState } from 'react';
import Icon from './Icon';
import Footer from './Footer';
import AboutLayer from './layer/AboutLayer';
import YoutubeLayer from './layer/YoutubeLayer';
import ReactLayer from './layer/ReactLayer';
import MovieLayer from './layer/MovieLayer';
import VueLayer from './layer/VueLayer';
import NewsfeedLayer from './menu/NewsfeedLayer'; // Newsfeed 레이어 컴포넌트 import
import MenuLayer from './menu/MenuLayer';
import SpotifyLayer from './menu/SpotifyLayer';
import PhpLayer from './layer/PhpLayer';


function MainIntro() {
  const [activeLayer, setActiveLayer] = useState('');

  const toggleLayer = (layerName) => {
    setActiveLayer(layerName === activeLayer ? '' : layerName);
  };

  return (
    <div id="mainIntro">
      <div className="wallpapers">
        <Icon
          imgSrc="img/intro.png"
          alt="intro"
          title="내 컴퓨터"
          className="introIcon"
          onClick={() => toggleLayer('about')}
        />
        <Icon
          imgSrc="img/youtube.png"
          alt="youtube"
          title="나만의 유튜브"
          className="youtubeIcon"
          onClick={() => toggleLayer('youtube')}
        />
        <Icon
          imgSrc="img/netflix.png"
          alt="netflix"
          title="영화 리스트"
          className="movieIcon"
          onClick={() => toggleLayer('movie')}
        />
        <Icon
          imgSrc="img/react.png"
          alt="reactIcon"
          title="리액트 블로그"
          className="reactIcon"
          onClick={() => toggleLayer('react')}
        />
        <Icon
          imgSrc="img/vue.png"
          alt="vueIcon"
          title="뷰 블로그"
          className="vueIcon"
          onClick={() => toggleLayer('vue')}
        />
        <Icon
          imgSrc="img/php.jpg"
          alt="phpIcon"
          title="php 블로그"
          className="phpIcon"
          onClick={() => toggleLayer('php')}
        />
      </div>

      <Footer onMenuClick={toggleLayer} />

      {/* Layers */}
      <AboutLayer isVisible={activeLayer === 'about'} toggleVisibility={() => toggleLayer('about')} />
      <YoutubeLayer isVisible={activeLayer === 'youtube'} toggleVisibility={() => toggleLayer('youtube')} />
      <MovieLayer isVisible={activeLayer === 'movie'} toggleVisibility={() => toggleLayer('movie')} />
      <ReactLayer isVisible={activeLayer === 'react'} toggleVisibility={() => toggleLayer('react')} />
      <VueLayer isVisible={activeLayer === 'vue'} toggleVisibility={() => toggleLayer('vue')} />
      <PhpLayer isVisible={activeLayer === 'php'} toggleVisibility={() => toggleLayer('php')} />
      <MenuLayer isVisible={activeLayer === 'menu'} toggleVisibility={() => toggleLayer('menu')} />
      <SpotifyLayer isVisible={activeLayer === 'spotify'} toggleVisibility={() => toggleLayer('spotify')} />
      <NewsfeedLayer isVisible={activeLayer === 'newsfeed'} toggleVisibility={() => toggleLayer('newsfeed')} />
    </div>
  );
}

export default MainIntro;





