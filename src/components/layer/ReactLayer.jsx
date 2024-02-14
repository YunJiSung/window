
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ReactLayer({ isVisible, toggleVisibility }) {

  return (
    <AnimatePresence>
      {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
        <motion.div
          className="layer layer4 react"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="layer__contents">
            <h3>travel youtube</h3>
            <span className="small">React project</span>
            <span className="mail"></span>
            <div className="img">
              <img src="img/youtube_project.png" alt="bg" />
            </div>
            <p>
              여행을 사랑하는 모든 이들에게, '여행 유튜버 사이트'은 여러분의 호기심을 자극하고, 새로운 여행지의 발견을 돕는 유튜브 기반의 정보 플랫폼입니다.
              이곳은 여행에 대한 영감을 주는 다양한 콘텐츠와 생생한 사용자 경험을 공유하는 공간으로, 여행을 준비하는 이들에게 실질적인 도움과 즐거움을 제공합니다.
            </p>
            <br />
            <p>
              여행지의 숨겨진 이야기부터, 실제 여행자들의 후기와 팁까지, 여행에 관한 모든 것을 한눈에 볼 수 있도록 디자인되었습니다.
              기술적인 면에서 '여행유튜버 사이트'는  React를 중심으로 제작 하였습니다 Git과 같은 협업 도구를 사용하여 지속적인 개선과 업데이트가 이루어집니다.
              또한, 강력한 API 통합을 통해 유튜브에서 실시간으로 콘텐츠를 불러와 최신의 여행 관련 비디오를 제공합니다.
              사용자들은 원하는 여행지의 유튜브 콘텐츠를 검색하고, 추천 받으며, 자신만의 여행 리스트를 만들 수 있습니다.
            </p>
            <br />
            <p>
              '여행 유튜버 사이트'는 여러분이 원하는 여행을 계획하고, 나아가 새로운 세계를 경험하도록 도와줄 것입니다. 여러분의 다음 여행지는 어디인가요? 지금 바로 '여행 유튜버 사이트'과 함께 그 여행을 시작하세요.
            </p>
            <br />
            <h4>Figma</h4>
            {/* <div className="img">
                            <img src="img/figma.png" alt="bg" />
                        </div> */}
            <p>
              개요<br />

              이 플랫폼은 다양한 YouTube 채널로부터 여행 관련 콘텐츠를 수집하여 표시하는 데 중점을 두고 있습니다. <br />
              React의 강력한 기능을 활용하여, 동적이고 사용자 친화적인 인터페이스를 제공함으로써 전반적인 탐색 경험을 향상시킵니다. <br />
              YouTube API와의 통합은 여행 블로그, 가이드 및 기타 관련 콘텐츠의 원활하고 최신의 스트림을 보장하여 여행 애호가들을 위한 원스톱 목적지를 만듭니다.<br />
              <br />

              주요 페이지 및 기능<br />
              <br />
              채널 페이지 (Channel.js)<br />
              <br />
              기능: 특정 YouTube 채널에 대한 자세한 정보를 표시합니다. 배너, 프로필 사진 및 구독자 수, 비디오 수, 전체 조회수와 같은 주요 통계를 포함합니다. <br />
              채널의 비디오 목록을 표시하고 추가 콘텐츠를 가져오기 위한 '더 보기' 기능을 제공합니다.<br />
              코드 하이라이트: React 훅 (useState, useEffect) 및 useParams를 사용하여 채널 세부 정보 및 비디오를 가져오고 표시합니다. <br />
              fetchFromAPI를 사용한 비동기 데이터 가져오기를 구현합니다.<br />
              <br />
              홈 페이지 (Home.js)<br />
              <br />
              기능: 다양한 채널에서 가져온 비디오 컬렉션을 특색있고 매력적인 레이아웃으로 표시하는 주요 랜딩 페이지입니다.<br />
              코드 하이라이트: 서로 다른 채널의 비디오를 저장하기 위해 여러 상태 변수를 사용합니다. useEffect 훅은 컴포넌트 마운트 시 각 채널의 비디오 데이터를 가져옵니다.<br />
              <br />
              검색 페이지 (Search.js)<br />
              <br />
              기능: 특정 쿼리에 따라 YouTube 비디오를 검색할 수 있습니다. 페이지네이션을 위한 '더 보기' 버튼이 포함되어 있습니다.<br />
              코드 하이라이트: useParams와 fetchFromAPI를 사용하여 검색 기능을 구현합니다. 비디오, 로딩 상태 및 페이지네이션을 위한 상태 관리를 합니다.<br />
              <br />
              오늘 및 유튜버 섹션 (Today.js, Youtuber.js)<br />
              <br />
              기능: 새로운 콘텐츠 발견을 증진시키기 위해 선정된 비디오와 YouTube 채널을 전시합니다.<br />
              코드 하이라이트: 렌더링을 위해 todayText 및 travelerText의 정적 데이터를 사용합니다.<br />
              <br />
              비디오 페이지 (Video.js)<br />
              <br />
              기능: 선택된 비디오에 대한 자세한 보기를 제공하며, 댓글 및 관련 통계를 포함합니다.<br />
              코드 하이라이트: useParams에서 비디오 ID를 사용하여 비디오 세부 정보 및 댓글을 가져오고 표시합니다.<br />
              <br />
              재사용 가능한 컴포넌트 (Header.js, Footer.js, Main.js)<br />
              <br />
              기능: 사이트 전반에 걸쳐 일관된 탐색, 브랜딩 및 레이아웃 구조를 제공합니다.<br />
              코드 하이라이트: Header는 탐색 및 소셜 미디어 링크를 포함하고, Footer는 연락처 정보를 제공하며, Main은 Helmet을 사용한 전체 페이지 레이아웃 및 SEO를 관리합니다.<br />
            </p>
          </div>
          <div className="layer__footer">
            <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
            <div>
              <span><a href="https://glittery-meringue-6e4151.netlify.app/" target="_blank" rel="noopener noreferrer" className="ko">
                view
              </a></span>
              <span><a href="https://github.com/YunJiSung/youtube-project" target="_blank" rel="noopener noreferrer" className="ko">
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

export default ReactLayer;