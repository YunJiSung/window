// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function ViteLayer({ isVisible, toggleVisibility }) {

//     return (
//         <AnimatePresence>
//             {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
//                 <motion.div
//                     className="layer layer6 vite"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>리액트 블로그</h3>
//                         <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
//                         <span className="mail"></span>
//                         <div className="img">
//                             <img src="img/bg01.png" alt="bg" />
//                         </div>
//                         <p>
//                             프로토타입을 작성해본 적이 없었던 와중에 Figma라는 툴이 새롭게 나오게 되었고 이걸 프로젝트에 적용하여 프로토타입을 작성해보면 좋을 것 같다고 말씀하셔서 적용하게 되었습니다.
//                             사실상 기술적인 면과 크게 관련되어 있진 않지만 프로토타입을 작성하면서 배웠던 점은 개발을 하기전에 뭘 개발해야 할지 명확하게 파악할 수 있었다는 점 입니다. 본래, 개발을 할
//                             때는 의식의 흐름으로 개발을 하고는 했는데 프로토타입을 통해서 체계적인 구조를 세우는 방법과 실제로 시연해봄으로써 발생할 수 있는 버그/예외 케이스 등에 대해 예측 할 수
//                             있었습니다.
//                         </p>
//                         <h4>Figma</h4>
//                         <div className="img">
//                             <img src="https://github.com/baeharam/Privacy-of-Animal/raw/master/portfolio/prototype.png" alt="prototype" />
//                         </div>
//                         <p>
//                             프로토타입을 작성해본 적이 없었던 와중에 Figma라는 툴이 새롭게 나오게 되었고 이걸 프로젝트에 적용하여 프로토타입을 작성해보면 좋을 것 같다고 말씀하셔서 적용하게 되었습니다.
//                             사실상 기술적인 면과 크게 관련되어 있진 않지만 프로토타입을 작성하면서 배웠던 점은 개발을 하기전에 뭘 개발해야 할지 명확하게 파악할 수 있었다는 점 입니다. 본래, 개발을 할
//                             때는 의식의 흐름으로 개발을 하고는 했는데 프로토타입을 통해서 체계적인 구조를 세우는 방법과 실제로 시연해봄으로써 발생할 수 있는 버그/예외 케이스 등에 대해 예측 할 수
//                             있었습니다.
//                         </p>
//                         <p>
//                             어플을 만들 때 기존 방식을 사용하면 Java/Swift를 사용해서 안드로이드/iOS를 각각 개발하는 것이 일반적인데, 프로젝트를 진행하던 시기에 마침 크로스 플랫폼 프레임워크인
//                             Flutter가 베타버전으로 나왔습니다. 바로 적용해보고자 했지만 프레임워크가 Dart라는 언어를 사용했기 때문에 해당 언어도 배우게 되었습니다. 결국, 새로운 언어와 새로운
//                             프레임워크를 배워야했고 정말 낯설었지만 이런 환경을 통해 공식문서로 학습하는 방법과 깃헙 이슈를 이용해 커뮤니케이션 하는 방법 을 배울 수 있었습니다. 아래 사진은 제가
//                             Flutter 저장소에 문의했던 이슈들입니다.
//                         </p>
//                     </div>
//                     <div className="layer__footer">
//                         <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
//                         <div>
//                             <span>view</span>
//                             <span>code</span>
//                             <span className="close" aria-hidden="true" onClick={toggleVisibility}></span>
//                         </div>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default ViteLayer;










// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function ViteLayer({ isVisible, toggleVisibility }) {

//     return (
//         <AnimatePresence>
//             {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
//                 <motion.div
//                     className="layer layer6 react"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>travel youtube</h3>
//                         <span className="small">React project</span>
//                         <span className="mail"></span>
//                         <div className="img">
//                             <img src="img/youtube_project.png" alt="bg" />
//                         </div>
//                         <p>
//                             여행을 사랑하는 모든 이들에게, '여행 유튜버 사이트'은 여러분의 호기심을 자극하고, 새로운 여행지의 발견을 돕는 유튜브 기반의 정보 플랫폼입니다.
//                             이곳은 여행에 대한 영감을 주는 다양한 콘텐츠와 생생한 사용자 경험을 공유하는 공간으로, 여행을 준비하는 이들에게 실질적인 도움과 즐거움을 제공합니다.
//                         </p>
//                         <br />
//                         <p>
//                             여행지의 숨겨진 이야기부터, 실제 여행자들의 후기와 팁까지, 여행에 관한 모든 것을 한눈에 볼 수 있도록 디자인되었습니다.
//                             기술적인 면에서 '여행유튜버 사이트'는  React를 중심으로 제작 하였습니다 Git과 같은 협업 도구를 사용하여 지속적인 개선과 업데이트가 이루어집니다.
//                             또한, 강력한 API 통합을 통해 유튜브에서 실시간으로 콘텐츠를 불러와 최신의 여행 관련 비디오를 제공합니다.
//                             사용자들은 원하는 여행지의 유튜브 콘텐츠를 검색하고, 추천 받으며, 자신만의 여행 리스트를 만들 수 있습니다.
//                         </p>
//                         <br />
//                         <p>
//                             '여행 유튜버 사이트'는 여러분이 원하는 여행을 계획하고, 나아가 새로운 세계를 경험하도록 도와줄 것입니다. 여러분의 다음 여행지는 어디인가요? 지금 바로 '여행 유튜버 사이트'과 함께 그 여행을 시작하세요.
//                         </p>
//                         <br />
//                         <h4>Figma</h4>
//                         {/* <div className="img">
//                             <img src="img/figma.png" alt="bg" />
//                         </div> */}
//                         <p>
//                             개요<br />

//                             이 플랫폼은 다양한 YouTube 채널로부터 여행 관련 콘텐츠를 수집하여 표시하는 데 중점을 두고 있습니다. <br />
//                             React의 강력한 기능을 활용하여, 동적이고 사용자 친화적인 인터페이스를 제공함으로써 전반적인 탐색 경험을 향상시킵니다. <br />
//                             YouTube API와의 통합은 여행 블로그, 가이드 및 기타 관련 콘텐츠의 원활하고 최신의 스트림을 보장하여 여행 애호가들을 위한 원스톱 목적지를 만듭니다.<br />
//                             <br />

//                             주요 페이지 및 기능<br />
//                             <br />
//                             채널 페이지 (Channel.js)<br />
//                             <br />
//                             기능: 특정 YouTube 채널에 대한 자세한 정보를 표시합니다. 배너, 프로필 사진 및 구독자 수, 비디오 수, 전체 조회수와 같은 주요 통계를 포함합니다. <br />
//                             채널의 비디오 목록을 표시하고 추가 콘텐츠를 가져오기 위한 '더 보기' 기능을 제공합니다.<br />
//                             코드 하이라이트: React 훅 (useState, useEffect) 및 useParams를 사용하여 채널 세부 정보 및 비디오를 가져오고 표시합니다. <br />
//                             fetchFromAPI를 사용한 비동기 데이터 가져오기를 구현합니다.<br />
//                             <br />
//                             홈 페이지 (Home.js)<br />
//                             <br />
//                             기능: 다양한 채널에서 가져온 비디오 컬렉션을 특색있고 매력적인 레이아웃으로 표시하는 주요 랜딩 페이지입니다.<br />
//                             코드 하이라이트: 서로 다른 채널의 비디오를 저장하기 위해 여러 상태 변수를 사용합니다. useEffect 훅은 컴포넌트 마운트 시 각 채널의 비디오 데이터를 가져옵니다.<br />
//                             <br />
//                             검색 페이지 (Search.js)<br />
//                             <br />
//                             기능: 특정 쿼리에 따라 YouTube 비디오를 검색할 수 있습니다. 페이지네이션을 위한 '더 보기' 버튼이 포함되어 있습니다.<br />
//                             코드 하이라이트: useParams와 fetchFromAPI를 사용하여 검색 기능을 구현합니다. 비디오, 로딩 상태 및 페이지네이션을 위한 상태 관리를 합니다.<br />
//                             <br />
//                             오늘 및 유튜버 섹션 (Today.js, Youtuber.js)<br />
//                             <br />
//                             기능: 새로운 콘텐츠 발견을 증진시키기 위해 선정된 비디오와 YouTube 채널을 전시합니다.<br />
//                             코드 하이라이트: 렌더링을 위해 todayText 및 travelerText의 정적 데이터를 사용합니다.<br />
//                             <br />
//                             비디오 페이지 (Video.js)<br />
//                             <br />
//                             기능: 선택된 비디오에 대한 자세한 보기를 제공하며, 댓글 및 관련 통계를 포함합니다.<br />
//                             코드 하이라이트: useParams에서 비디오 ID를 사용하여 비디오 세부 정보 및 댓글을 가져오고 표시합니다.<br />
//                             <br />
//                             재사용 가능한 컴포넌트 (Header.js, Footer.js, Main.js)<br />
//                             <br />
//                             기능: 사이트 전반에 걸쳐 일관된 탐색, 브랜딩 및 레이아웃 구조를 제공합니다.<br />
//                             코드 하이라이트: Header는 탐색 및 소셜 미디어 링크를 포함하고, Footer는 연락처 정보를 제공하며, Main은 Helmet을 사용한 전체 페이지 레이아웃 및 SEO를 관리합니다.<br />
//                         </p>
//                     </div>
//                     <div className="layer__footer">
//                         <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
//                         <div>
//                             <span><a href="https://glittery-meringue-6e4151.netlify.app/" target="_blank" className="ko">
//                                 view
//                             </a></span>
//                             <span><a href="https://github.com/YunJiSung/youtube-project" target="_blank" rel="noopener noreferrer" className="ko">
//                                 code
//                             </a></span>

//                             {/* <span className="close" aria-hidden="true" onClick={toggleVisibility}></span> */}
//                         </div>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default ViteLayer;










import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PhpLayer({ isVisible, toggleVisibility }) {

    return (
        <AnimatePresence>
            {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
                <motion.div
                    className="layer layer6 react"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <div className="layer__contents">
                        <h3>리액트 블로그</h3>
                        <span className="small">Team project</span>
                        <span className="mail"></span>
                        <div className="img">
                            <img src="img/shcoolmain.png" alt="bg" />
                        </div>
                        <p>
                            Go!교복
                            팀플 블로그 사이트 만들기<br />
                            <br />
                            직장인 커뮤니티, 대학생 커뮤니티 <br />
                            "왜 청소년을 위한 커뮤니티는 없을까?" 라는 생각에서 진행하게 된 프로젝트입니다!<br />
                            학교에서 얻을 수 없는 독특한 정보를 제공하고자,<br />
                            전국 고등학교의 교복을 소개하는 커뮤니티 사이트를 제작하였습니다.<br />
                            <br />
                            전국의 교복을 구경하며 투표를 할 수 있고,<br />
                            그에 대한 평가는 댓글로도 자유롭게 논할 수 있습니다.<br />
                            <br />
                            투표가 진행된 해당 학교의 교복은 인기순위로 매겨지고<br />
                            각 조회수, 좋아요, 싫어요 순으로 순위를 확인할 수 있습니다.<br />
                            <br />
                            또, "수다방" 커뮤니티에서 학생들만의 이야기로<br />
                            수다의 꽃을 피울 수 있습니다!
                        </p>
                        <h4>Figma</h4>
                        <div className="img">
                            <img src="img/figma.png" alt="bg" />
                        </div>
                        <p>
                            <br />
                            1. HEADER<br />
                            <br />
                            - 메인 컬러 : #1976DE, 서브 컬러 : black, white, #D2E7FF<br />
                            - 로고 : 롯데리아 촵땡겨체(LotteriaChab)<br />
                            - 메뉴 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                            <br />
                            2. MAIN<br />
                            <br />
                            - Main Visual<br />
                            1 애니메이션 교실 배경 이미지<br />
                            2 메인 문구 폰트 : Londrina Solid 구글 폰트<br />
                            3 서브 폰트 : 샌드박스 어그로체<br />
                            - Main Section<br />
                            1 메인 폰트 : 샌드박스 어그로체<br />
                            2 서브 폰트 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                            <br />
                            3. SUB<br />
                            <br />
                            - 상단 배너 이미지 : 애니메니션 학교 배경, 실사 교복 착용 화보 이미지<br />
                            1 전체 폰트 : 샌드박스 어그로체<br />
                            2 교복 상세페이지 : 인스타그램 레이아웃 참고<br />
                            <br />
                            4. FOOTER<br />
                            <br />
                            - Black 색상 배경<br />
                            - 전체 폰트 : 샌드박스 어그로체<br />

                        </p>
                        <p>

                            <h3>Page-list</h3>
                            <br />
                            1. HEADER<br />
                            - logo 제작<br />
                            - nav - menu 구성 (교복소개, 인기순위, 수다방, 로그인, 회원가입)<br />
                            <br />
                            2. . 메인페이지<br />
                            - Main Visual : gsap를 이용한 애니메이션<br />
                            - section01 : 이미지 슬라이드, 배경 고정 효과<br />
                            - section02 : 마우스 Hover 효과, 링크 바로가기<br />
                            - section03 : php를 이용하여 게시판 리스트 정보 가져오기<br />
                            - section04 : css animation 효과, 유튜브 영상 탭메뉴 구현<br />
                            <br />
                            3. 교복소개<br />
                            - json을 이용하여 전국 학교 정보 출력<br />
                            - 지역별 필터 검색<br />
                            - 키워드 검색<br />
                            - 교복 목록 조회수, 댓글수 표시<br />
                            <br />
                            4. 교복소개 상세<br />
                            - 교복 이미지 swiper를 이용한 슬라이드<br />
                            - 좋아요, 싫어요 투표 기능 : 클릭 시, 배경 색상 변경 효과<br />
                            - 댓글 : 댓글작성, 댓글 좋아요/좋아요 취소, 이모티콘 작성<br />
                            <br />
                            5. 인기순위<br />
                            - 조회수, 좋아요, 싫어요 순으로 리스트 정렬<br />
                            - 각 조회수, 좋아요, 싫어요 수 노출<br />
                            <br />
                            6. 수다방<br />
                            - 게시판 목록 : NO, Title, Name, Date, View, Like<br />
                            - 게시판 상세 : 게시글 좋아요 기능, 댓글 기능(댓글 작성, 랜덤 프로필, 댓글 좋아요 기능)<br />
                            <br />
                            7. 마이페이지<br />
                            - 내 정보 변경 : 회원가입 정보 불러오기/정보 수정 기능<br />
                            - 내가 쓴 글 : 각 회원별 게시판 작성글 불러오기<br />
                            - 내가 좋아한 교복 : 교복소개 페이지에서 좋아요 누른 교복 정보 불러오기<br />
                            - 비밀번호 변경 : 비밀번호 변경 기능<br />
                            - 회원 탈퇴하기 : 회원 정보 삭제<br />
                            <br />
                            8. 로그인<br />
                            - 아이디, 비밀번호 입력 시 일치하는 정보  가져오기<br />
                            - 아이디 찾기 : 연락처, 이름 일치 정보<br />
                            - 비밀번호 찾기 기능 : 아이디, 연락처 일치 정보<br />
                            <br />
                            9. 회원가입<br />
                            - 아이디 : 중복 검사 기능<br />
                            - 이름<br />
                            - 이메일 : 중복 검사 기능<br />
                            - 비밀번호, 비밀번호 확인<br />
                            - 주소 : 주소 검색 기능<br />
                            - 연락처<br />
                            - 약관 동의<br />
                            - 가입 완료 시, 회원 정보 저장<br />
                            <br />
                            10. FOOTER<br />
                            - Copyright 2023 Gogyobok
                        </p>
                    </div>
                    <div className="layer__footer">
                        <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
                        <div>
                            <span><a href="http://capitaljs10.dothome.co.kr/blog_php/index.html" target="_blank" className="ko">
                                view
                            </a></span>
                            <span><a href="https://github.com/YunJiSung/SUsite" target="_blank" rel="noopener noreferrer" className="ko">
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

export default PhpLayer;



