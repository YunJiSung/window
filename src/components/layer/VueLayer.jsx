import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function VueLayer({ isVisible, toggleVisibility }) {

    return (
        <AnimatePresence>
            {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
                <motion.div
                    className="layer layer5 react"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <div className="layer__contents">
                        <h3>Vue 블로그</h3>
                        <span className="small">Vue를 활용하여 만든 사이트 입니다.</span>
                        <span className="mail"></span>
                        <div className="img">
                            <img src="img/vue01.png" alt="bg" />
                        </div>
                        <p>
                            이 사이트는 단일 페이지 웹사이트로, 스크롤에 반응하는 인터랙티브한 요소들을 통해 개발자의 기술, 작업물, 그리고 도전 과제를 생동감 있게 소개합니다.
                            모던하고 심플한 디자인에 GSAP 애니메이션과 ScrollTrigger를 결합하여 사용자 경험을 강화하고, 반응형 레이아웃을 통해 다양한 디바이스에서의 접근성을 보장합니다.
                            사용자는 헤더의 네비게이션 메뉴를 통해 관심 있는 섹션으로 쉽게 이동할 수 있습니다.
                        </p>
                        {/* <h4>Figma</h4>
                        <div className="img">
                            <img src="https://github.com/baeharam/Privacy-of-Animal/raw/master/portfolio/prototype.png" alt="prototype" />
                        </div> */}
                        <p>
                            <h3>Page-list</h3>
                            <br />
                            1. Header Section<br />
                            - 페이지의 상단에 위치한 헤더 섹션입니다.<br />
                            - 로고와 함께 네비게이션 메뉴가 있으며, 메뉴는 상호작용할 수 있는 링크들을 포함합니다.<br />
                            - 모바일 환경을 고려하여 반응형 디자인이 적용되어 있으며, 모바일 메뉴 토글 기능을 포함합니다.<br />
                            <br />
                            2. . Intro Section<br />
                            - 사이트의 소개 및 메인 타이틀을 담고 있는 섹션입니다.<br />
                            - 인트로 섹션 하단에는 다시 여러 가로줄 디자인 요소가 있으며, 배경색과 텍스트의 변화를 주는 인터랙티브한 스타일링이 적용되어 있습니다.<br />

                            <br />
                            3. Site Section<br />
                            - 사이트 코딩 작업물을 보여주는 섹션입니다.<br />
                            - siteText는 사이트 코딩 관련 데이터를 담고 있으며, 각 항목은 순번, 텍스트, 링크를 포함합니다.<br />
                            - 각 항목은 스티키 포지셔닝을 사용하여 사용자가 스크롤할 때 특정 위치에 고정되도록 설정되어 있습니다.<br />
                            <br />
                            4. Portfolio Section<br />
                            - 포트폴리오 작업물을 보여주는 섹션입니다.<br />
                            - portText는 포트폴리오 아이템의 데이터를 담고 있으며, 각 아이템은 이미지와 제목, 설명을 포함합니다.<br />
                            - 포트폴리오 아이템에는 가로 스크롤 애니메이션이 적용되어 있으며, GSAP 라이브러리와 ScrollTrigger 플러그인을 사용하여 구현되었습니다.<br />
                            - 포트폴리오 아이템에는 가로 스크롤 애니메이션이 적용되어 있으며, GSAP 라이브러리와 ScrollTrigger 플러그인을 사용하여 구현되었습니다.<br />
                            <br />
                            5. Contact Section<br />
                            - 연락처 정보를 나타내는 섹션입니다.<br />
                            - contactText는 연락처 데이터를 담고 있는 상수로, v-for 디렉티브를 사용하여 동적으로 여러 연락처 링크를 생성합니다.<br />
                            <br />
                            6. Footer Section<br />
                            - 사이트의 푸터를 나타내며, 저작권 정보와 사이트에 대한 간단한 설명이 포함되어 있습니다.<br />
                            - footerText는 소셜 미디어 링크를 담고 있으며, v-for를 사용하여 소셜 미디어 링크를 동적으로 생성합니다.<br />
                            - 회원가입 링크와 소셜 미디어 연결에 대한 설명이 있습니다.<br />
                            <br />
                        </p>
                    </div>
                    <div className="layer__footer">
                        <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
                        <div>
                            <span><a href="https://vite-project733.netlify.app/" target="_blank" rel="noopener noreferrer" className="ko">
                                view
                            </a></span>
                            <span><a href="https://github.com/YunJiSung/vue-project" target="_blank" rel="noopener noreferrer" className="ko">
                                code
                            </a></span>

                            {/* <span className="close" aria-hidden="true" onClick={toggleVisibility}></span> */}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default VueLayer;
