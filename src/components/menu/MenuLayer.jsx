
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MenuLayer({ isVisible, toggleVisibility }) { // props 추가
    return (
        <AnimatePresence>
            {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
                <motion.div
                    className="layer layer7 menu"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <div className="layer__contents">
                        <div className="img">
                            <img src="img/one.png" alt="bg" />
                        </div>
                    </div>
                    <div className="layer__footer">
                        <p className="ment">😎 윤지성 개발자입니다.</p>
                        {/* toggleVisibility 함수를 클릭 이벤트에 연결 */}
                        <span className="close" aria-hidden="true" onClick={toggleVisibility}></span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default MenuLayer;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MenuLayer({ isVisible, toggleVisibility }) {
//     const [backgroundImage, setBackgroundImage] = useState(""); // 배경 이미지 상태

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onload = (e) => setBackgroundImage(e.target.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer7 menu"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     style={{ backgroundImage: `url(${backgroundImage})` }} // 배경 스타일 적용
//                 >
//                     <div className="layer__contents">
//                         {/* 파일 입력 요소 */}
//                         <input type="file" accept="image/*" onChange={handleImageChange} />
//                     </div>
//                     <div className="layer__footer">
//                         <p className="ment">😎 윤지성 개발자입니다.</p>
//                         <span className="close" aria-hidden="true" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MenuLayer;
// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MenuLayer({ isVisible, toggleVisibility, setBackground }) { // setBackground prop 추가
//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setBackground(reader.result); // 배경 설정
//                 localStorage.setItem('backgroundImage', reader.result);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             alert('Invalid file type.');
//         }
//     };

//     const handleChange = (event) => {
//         setBackground(event.target.value); // 배경 설정
//         if (event.target.value) {
//             localStorage.setItem('backgroundImage', event.target.value);
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer7 menu"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         {/* 이미지 업로드와 선택을 위한 입력 요소 */}
//                         <input type="file" onChange={handleImageUpload} />
//                         <select onChange={handleChange}>
//                             <option value="/img/Wallpaper.jpg">기본 이미지</option>
//                             <option value="/img/img01.png">이미지 1</option>
//                             <option value="/img/img02.jpg">이미지 2</option>
//                             {/* 추가 이미지 옵션 */}
//                         </select>
//                     </div>
//                     <div className="layer__footer">
//                         <p className="ment">😎 윤지성 개발자입니다.</p>
//                         <span className="close" aria-hidden="true" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MenuLayer;
