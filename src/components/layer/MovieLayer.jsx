import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MovieLayer({ isVisible, toggleVisibility }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="layer layer3 youtube"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <div className="layer__contents">
                        <h3>영화 유튜버</h3>
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

export default MovieLayer;





