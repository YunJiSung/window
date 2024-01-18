
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SpotifyLayer({ isVisible, toggleVisibility }) { // props 추가
    return (
        <AnimatePresence>
            {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
                <motion.div
                    className="layer layer8 spotify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <div className="layer__contents">
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

export default SpotifyLayer;
