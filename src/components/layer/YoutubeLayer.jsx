// import React from 'react';

// function YoutubeLayer() {
//   return (
//     <div className="layer layer2 youtube">
//       <div className="layer__contents">
//         <h3>코딩 유튜버</h3>
//         <span className="small">Youtube API <em>API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</em></span>
//         <span className="mail"></span>
//         <div className="info">
//           {/* 유튜브 관련 컨텐츠 */}
//         </div>
//         <div className="view">
//           {/* 동적으로 로딩되는 유튜브 비디오 목록 */}
//         </div>
//       </div>
//       <div className="layer__footer">😏 유튜브를 통해 코딩 영상을 보면 유혹들이 많습니다. 여기서 보면 최신 코딩만 광고 없이 볼 수 있습니다.</div>
//     </div>
//   );
// }

// export default YoutubeLayer;



// import React from 'react';

// function YoutubeLayer() {
//   return (
//     <div className="layer layer2 youtube">
//       <div className="layer__contents">
//         <h3>코딩 유튜버</h3>
//         <span className="small">Youtube API <em>API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</em></span>
//         <div className="info">
//           <div>
//             <input type="search" placeholder="검색" />
//           </div>
//           <div>
//             <ul>
//               <li>all</li>
//               <li className="active">coding</li>
//               <li>react</li>
//               <li>node.js</li>
//               <li>javascript</li>
//             </ul>
//           </div>
//         </div>
//         <div className="view">
//           {/* 이 부분은 동적으로 로딩되는 유튜브 비디오 목록을 표시해야 합니다.
//                실제 데이터를 사용하려면 API 호출과 상태 관리가 필요합니다. */}
//           {/* 예시를 위한 정적 컨텐츠 */}
//           <div className="video">
//             <div className="img"></div>
//             <div className="title">100+ JavaScript Concepts you Need to Know</div>
//           </div>
//           {/* ... 여기에 더 많은 비디오를 추가할 수 있습니다 ... */}
//         </div>
//       </div>
//       <div className="layer__footer">😏 유튜브를 통해 코딩 영상을 보면 유혹들이 많습니다. 여기서 보면 최신 코딩만 광고 없이 볼 수 있습니다.</div>
//     </div>
//   );
// }

// export default YoutubeLayer;





// import React from 'react';

// function YoutubeLayer() {
//   // 유튜브 비디오 목록 예시를 위한 배열
//   const videos = new Array(10).fill({
//     title: "100+ JavaScript Concepts you Need to Know",
//     imgSrc: "/image.jpg", // 이미지 경로를 적절히 설정하세요
//   });

//   return (
//     <div className="layer layer2 youtube none">
//       <div className="layer__contents">
//         <h3>코딩 유튜버</h3>
//         <span className="small">Youtube API <em>API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</em></span>
//         <div className="info">
//           <div>
//             <input type="search" placeholder="검색" />
//           </div>
//           <div>
//             <ul>
//               <li>all</li>
//               <li className="active">coding</li>
//               <li>react</li>
//               <li>node.js</li>
//               <li>javascript</li>
//             </ul>
//           </div>
//         </div>
//         <div className="view">
//           {videos.map((video, index) => (
//             <div key={index} className="video">
//               <div className="img" style={{ backgroundImage: `url(${video.imgSrc})` }}></div>
//               <div className="title">{video.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="layer__footer">
//         😏 유튜브를 통해 코딩 영상을 보면 유혹들이 많습니다. 여기서 보면 최신 코딩만 광고 없이 볼 수 있습니다.

//       </div>
//     </div>
//   );
// }

// export default YoutubeLayer;









// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function YoutubeLayer({ toggleLayer }) {

//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//     toggleLayer('youtube');
//   };

// // 유튜브 비디오 목록 예시를 위한 배열
//   const videos = new Array(10).fill({
//     title: "100+ JavaScript Concepts you Need to Know",
//     imgSrc: "/image.jpg", // 이미지 경로를 적절히 설정하세요
//   });

//   return (
//     <div className="layer layer2 youtube none">
//       <div className="layer__contents">
//         <h3>코딩 유튜버</h3>
//         <span className="small">Youtube API <em>API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</em></span>
//         <div className="info">
//           <div>
//             <input type="search" placeholder="검색" />
//           </div>
//           <div>
//             <ul>
//               <li>all</li>
//               <li className="active">coding</li>
//               <li>react</li>
//               <li>node.js</li>
//               <li>javascript</li>
//             </ul>
//           </div>
//         </div>
//         <div className="view">
//           {videos.map((video, index) => (
//             <div key={index} className="video">
//               <div className="img" style={{ backgroundImage: `url(${video.imgSrc})` }}></div>
//               <div className="title">{video.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="layer__footer">
//         😏 유튜브를 통해 코딩 영상을 보면 유혹들이 많습니다. 여기서 보면 최신 코딩만 광고 없이 볼 수 있습니다.

//       </div>
//     </div>
//   );
// }

// export default YoutubeLayer;




//2024.01.18 다른 방식 코드
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function YoutubeLayer({ toggleLayer }) {
//   const [isVisible, setIsVisible] = useState(false);

//   // 부모 컴포넌트로부터 받은 toggleLayer 함수를 호출하여
//   // YoutubeLayer 컴포넌트의 visibility 상태를 변경합니다.
//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//     toggleLayer('youtube');
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="layer layer2 youtube"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//         >
//           <div className="layer__contents">
//             <h3>코딩 유튜버</h3>
//             <span className="small">Youtube API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</span>
//             {/* 검색 및 카테고리 필터 */}
//             <div className="info">
//               <div>
//                 <input type="search" placeholder="검색" />
//               </div>
//               <div>
//                 <ul>
//                   <li>all</li>
//                   <li className="active">coding</li>
//                   <li>react</li>
//                   <li>node.js</li>
//                   <li>javascript</li>
//                 </ul>
//               </div>
//             </div>
//             {/* 비디오 목록 */}
//             <div className="view">
//               {/* 비디오 목록 생성 로직 (임시 데이터 사용) */}
//               {new Array(10).fill(null).map((_, index) => (
//                 <div key={index} className="video">
//                   <div className="img" style={{ backgroundImage: `url(placeholder-image-url)` }}></div>
//                   <div className="title">비디오 제목 {index + 1}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="layer__footer">
//             <span className="close" onClick={handleToggle}></span>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default YoutubeLayer;





//2024.01.18 
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function YoutubeLayer({ isVisible, toggleVisibility }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="layer layer2 youtube"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="layer__contents">
            <h3>코딩 유튜버</h3>
            <span className="small">Youtube API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</span>
            {/* 검색 및 카테고리 필터 */}
            <div className="info">
              <div>
                <input type="search" placeholder="검색" />
              </div>
              <div>
                <ul>
                  <li>all</li>
                  <li className="active">coding</li>
                  <li>react</li>
                  <li>node.js</li>
                  <li>javascript</li>
                </ul>
              </div>
            </div>
            {/* 비디오 목록 */}
            <div className="view">
              {/* 비디오 목록 생성 로직 (임시 데이터 사용) */}
              {new Array(10).fill(null).map((_, index) => (
                <div key={index} className="video">
                  <div className="img" style={{ backgroundImage: `url(placeholder-image-url)` }}></div>
                  <div className="title">비디오 제목 {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="layer__footer">
            <span className="close" onClick={toggleVisibility}></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default YoutubeLayer;





