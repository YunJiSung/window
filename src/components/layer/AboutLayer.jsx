// import React from 'react';

// function AboutLayer() {
//   return (
//     <div className="layer layer1 aboutLayer">
//       <div className="layer__contents">
//         <div className="me">
//           <img src="/assets/img/intro.png" alt="Profile" />
//         </div>
//         <h3>윤지성</h3>
//         <span className="small">Frontend developer</span>
//         <span className="mail">frontend@naver.com</span>
//         <p className="intro1">
//           안녕하세요! 창의적인 웹 디자인과 최신 프론트엔드 기술에 열정을 가진 취업 준비생입니다.
//           HTML, CSS, JavaScript를 포함한 다양한 웹 기술에 능숙하며, 사용자 경험을 최우선으로 생각하는 웹사이트와 애플리케이션 개발에 경험이 있습니다.
//           새로운 기술을 배우고 도전하는 것을 좋아하며, 팀과 협력하여 혁신적이고 효과적인 솔루션을 만드는 데 기여하고 싶습니다.
//         </p>
//         <p className="intro2">
//           대학에서 컴퓨터 과학을 전공하며 프론트엔드 개발에 대한 깊은 이해를 쌓았고, 다양한 프로젝트와 인턴십을 통해 실제 작업 환경에서의 경험을 얻었습니다. 반응형 웹 디자인과 크로스
//           브라우저 호환성에 대한 지식을 바탕으로 접근성과 사용성을 강조하는 웹사이트를 구축하는 데 특화되어 있습니다. 항상 최신 웹 기술 트렌드를 따르며, 새로운 프레임워크와 라이브러리를
//           배우는 것에 능동적으로 참여하여 기술 스택을 지속적으로 확장하고 있습니다.
//         </p>
//         <div className="list">
//           <dl>
//             <dt>basic</dt>
//             <dd><em>HTML</em>: 웹 페이지의 구조와 콘텐츠를 효과적으로 구현할 수 있는 능력을 보유하고 있습니다. 다양한 HTML5 태그와 속성을 활용하여 의미론적이고 접근성이 높은 웹사이트를 개발하는 데 익숙합니다.</dd>
//             <dd><em>CSS</em>: 웹 페이지의 시각적 디자인과 레이아웃을 세련되게 조정할 수 있습니다. Flexbox와 Grid 시스템을 이용한 반응형 웹 디자인을 구현한 경험이 있으며, CSS 애니메이션과 전환을 활용하여 사용자 경험을 향상시키는 데 능숙합니다.</dd>
//             <dd><em>JavaScript</em>: 동적 웹 페이지 및 애플리케이션 개발에 있어 깊은 이해도를 보유하고 있습니다. 비동기 프로그래밍, ES6+ 문법, DOM 조작 등을 포함한 고급 개념에 능숙합니다. 대규모 프로젝트에서의 성능 최적화와 디버깅에 경험이 풍부합니다.</dd>
//             <dd><em>SCSS</em>: CSS 전처리기인 SCSS를 사용하여 보다 효율적이고 유지보수가 용이한 스타일시트를 작성합니다. 중첩 규칙, 믹스인, 함수를 활용한 동적 스타일링에 능숙합니다.</dd>
//           </dl>
//           <dl>
//             <dt>framework</dt>
//             <dd><em>React</em>: 컴포넌트 기반 아키텍처를 이해하고 있으며, 대규모 어플리케이션 개발에 React를 활용한 경험이 풍부합니다. React Hooks, 상태 관리 라이브러리(예: Redux) 및 최적화 기술에 능숙합니다.</dd>
//             <dd><em>Vue.js</em>: 선언적 렌더링과 컴포넌트 시스템을 이용한 인터랙티브한 UI 개발에 경험이 있습니다. Vuex를 활용한 상태 관리와 Vue Router를 사용한 라우팅에 익숙합니다.</dd>
//             <dd><em>Next.js</em>: 서버 사이드 렌더링(SSR)과 정적

//               사이트 생성(SSG)에 대한 이해를 바탕으로 Next.js 프레임워크를 활용한 웹 애플리케이션 개발에 경험이 있습니다. SEO 최적화 및 퍼포먼스 향상을 위한 기술적 전략 구현에 능숙합니다.</dd>
//             <dd><em>MySQL</em>: 데이터베이스 설계 및 관리에 있어 실질적인 경험을 가지고 있습니다. SQL 쿼리 작성, 데이터베이스 최적화, 복잡한 조인 및 트랜잭션 처리에 능숙합니다.</dd>
//             <dd><em>PHP</em>: 서버 사이드 스크립트 작성에 능숙하며, PHP를 사용한 데이터 관리와 동적 웹 페이지 생성에 경험이 있습니다. 객체지향 PHP 개발에 익숙하며, MVC 아키텍처를 이해하고 적용한 경험이 있습니다.</dd>
//           </dl>
//         </div>
//       </div>
//       <div className="layer__footer">
//         <p className="ment">😎 윤지성 개발자입니다. </p>
//         <span className="close" aria-hidden="true"></span>
//       </div>
//     </div>
//   );
// }

// export default AboutLayer;





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function AboutLayer() {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleCloseClick = () => {
//     setIsVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="layer layer1 aboutLayer"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//         >
//           <div className="layer__contents">
//             <div className="me">
//               <img src="/assets/img/intro.png" alt="Profile" />
//             </div>
//             <h3>윤지성</h3>
//             <span className="small">Frontend developer</span>
//             <span className="mail">frontend@naver.com</span>
//             <p className="intro1">
//               안녕하세요! 창의적인 웹 디자인과 최신 프론트엔드 기술에 열정을 가진 취업 준비생입니다.
//               HTML, CSS, JavaScript를 포함한 다양한 웹 기술에 능숙하며, 사용자 경험을 최우선으로 생각하는 웹사이트와 애플리케이션 개발에 경험이 있습니다.
//               새로운 기술을 배우고 도전하는 것을 좋아하며, 팀과 협력하여 혁신적이고 효과적인 솔루션을 만드는 데 기여하고 싶습니다.
//             </p>
//             <p className="intro2">
//               대학에서 컴퓨터 과학을 전공하며 프론트엔드 개발에 대한 깊은 이해를 쌓았고, 다양한 프로젝트와 인턴십을 통해 실제 작업 환경에서의 경험을 얻었습니다. 반응형 웹 디자인과 크로스
//               브라우저 호환성에 대한 지식을 바탕으로 접근성과 사용성을 강조하는 웹사이트를 구축하는 데 특화되어 있습니다. 항상 최신 웹 기술 트렌드를 따르며, 새로운 프레임워크와 라이브러리를
//               배우는 것에 능동적으로 참여하여 기술 스택을 지속적으로 확장하고 있습니다.
//             </p>
//             <div className="list">
//               <dl>
//                 <dt>basic</dt>
//                 <dd><em>HTML</em>: 웹 페이지의 구조와 콘텐츠를 효과적으로 구현할 수 있는 능력을 보유하고 있습니다. 다양한 HTML5 태그와 속성을 활용하여 의미론적이고 접근성이 높은 웹사이트를 개발하는 데 익숙합니다.</dd>
//                 <dd><em>CSS</em>: 웹 페이지의 시각적 디자인과 레이아웃을 세련되게 조정할 수 있습니다. Flexbox와 Grid 시스템을 이용한 반응형 웹 디자인을 구현한 경험이 있으며, CSS 애니메이션과 전환을 활용하여 사용자 경험을 향상시키는 데 능숙합니다.</dd>
//                 <dd><em>JavaScript</em>: 동적 웹 페이지 및 애플리케이션 개발에 있어 깊은 이해도를 보유하고 있습니다. 비동기 프로그래밍, ES6+ 문법, DOM 조작 등을 포함한 고급 개념에 능숙합니다. 대규모 프로젝트에서의 성능 최적화와 디버깅에 경험이 풍부합니다.</dd>
//                 <dd><em>SCSS</em>: CSS 전처리기인 SCSS를 사용하여 보다 효율적이고 유지보수가 용이한 스타일시트를 작성합니다. 중첩 규칙, 믹스인, 함수를 활용한 동적 스타일링에 능숙합니다.</dd>
//               </dl>
//               <dl>
//                 <dt>framework</dt>
//                 <dd><em>React</em>: 컴포넌트 기반 아키텍처를 이해하고 있으며, 대규모 어플리케이션 개발에 React를 활용한 경험이 풍부합니다. React Hooks, 상태 관리 라이브러리(예: Redux) 및 최적화 기술에 능숙합니다.</dd>
//                 <dd><em>Vue.js</em>: 선언적 렌더링과 컴포넌트 시스템을 이용한 인터랙티브한 UI 개발에 경험이 있습니다. Vuex를 활용한 상태 관리와 Vue Router를 사용한 라우팅에 익숙합니다.</dd>
//                 <dd><em>Next.js</em>: 서버 사이드 렌더링(SSR)과 정적

//                   사이트 생성(SSG)에 대한 이해를 바탕으로 Next.js 프레임워크를 활용한 웹 애플리케이션 개발에 경험이 있습니다. SEO 최적화 및 퍼포먼스 향상을 위한 기술적 전략 구현에 능숙합니다.</dd>
//                 <dd><em>MySQL</em>: 데이터베이스 설계 및 관리에 있어 실질적인 경험을 가지고 있습니다. SQL 쿼리 작성, 데이터베이스 최적화, 복잡한 조인 및 트랜잭션 처리에 능숙합니다.</dd>
//                 <dd><em>PHP</em>: 서버 사이드 스크립트 작성에 능숙하며, PHP를 사용한 데이터 관리와 동적 웹 페이지 생성에 경험이 있습니다. 객체지향 PHP 개발에 익숙하며, MVC 아키텍처를 이해하고 적용한 경험이 있습니다.</dd>
//               </dl>
//             </div>
//           </div>
//           <div className="layer__footer">
//             <p className="ment">😎 윤지성 개발자입니다.</p>
//             <span className="close" aria-hidden="true" onClick={handleCloseClick}></span>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default AboutLayer;








import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AboutLayer({ isVisible, toggleVisibility }) { // props 추가
  return (
    <AnimatePresence>
      {isVisible && ( // isVisible props를 사용하여 렌더링 여부 결정
        <motion.div
          className="layer layer1 aboutLayer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="layer__contents">
            <div className="me">
              <img src="/assets/img/intro.png" alt="Profile" />
            </div>
            <h3>윤지성</h3>
            <span className="small">Frontend developer</span>
            <span className="mail">frontend@naver.com</span>
            <p className="intro1">
              안녕하세요! 창의적인 웹 디자인과 최신 프론트엔드 기술에 열정을 가진 취업 준비생입니다.
              HTML, CSS, JavaScript를 포함한 다양한 웹 기술에 능숙하며, 사용자 경험을 최우선으로 생각하는 웹사이트와 애플리케이션 개발에 경험이 있습니다.
              새로운 기술을 배우고 도전하는 것을 좋아하며, 팀과 협력하여 혁신적이고 효과적인 솔루션을 만드는 데 기여하고 싶습니다.
            </p>
            <p className="intro2">
              대학에서 컴퓨터 과학을 전공하며 프론트엔드 개발에 대한 깊은 이해를 쌓았고, 다양한 프로젝트와 인턴십을 통해 실제 작업 환경에서의 경험을 얻었습니다. 반응형 웹 디자인과 크로스
              브라우저 호환성에 대한 지식을 바탕으로 접근성과 사용성을 강조하는 웹사이트를 구축하는 데 특화되어 있습니다. 항상 최신 웹 기술 트렌드를 따르며, 새로운 프레임워크와 라이브러리를
              배우는 것에 능동적으로 참여하여 기술 스택을 지속적으로 확장하고 있습니다.
            </p>
            <div className="list">
              <dl>
                <dt>basic</dt>
                <dd><em>HTML</em>: 웹 페이지의 구조와 콘텐츠를 효과적으로 구현할 수 있는 능력을 보유하고 있습니다. 다양한 HTML5 태그와 속성을 활용하여 의미론적이고 접근성이 높은 웹사이트를 개발하는 데 익숙합니다.</dd>
                <dd><em>CSS</em>: 웹 페이지의 시각적 디자인과 레이아웃을 세련되게 조정할 수 있습니다. Flexbox와 Grid 시스템을 이용한 반응형 웹 디자인을 구현한 경험이 있으며, CSS 애니메이션과 전환을 활용하여 사용자 경험을 향상시키는 데 능숙합니다.</dd>
                <dd><em>JavaScript</em>: 동적 웹 페이지 및 애플리케이션 개발에 있어 깊은 이해도를 보유하고 있습니다. 비동기 프로그래밍, ES6+ 문법, DOM 조작 등을 포함한 고급 개념에 능숙합니다. 대규모 프로젝트에서의 성능 최적화와 디버깅에 경험이 풍부합니다.</dd>
                <dd><em>SCSS</em>: CSS 전처리기인 SCSS를 사용하여 보다 효율적이고 유지보수가 용이한 스타일시트를 작성합니다. 중첩 규칙, 믹스인, 함수를 활용한 동적 스타일링에 능숙합니다.</dd>
              </dl>
              <dl>
                <dt>framework</dt>
                <dd><em>React</em>: 컴포넌트 기반 아키텍처를 이해하고 있으며, 대규모 어플리케이션 개발에 React를 활용한 경험이 풍부합니다. React Hooks, 상태 관리 라이브러리(예: Redux) 및 최적화 기술에 능숙합니다.</dd>
                <dd><em>Vue.js</em>: 선언적 렌더링과 컴포넌트 시스템을 이용한 인터랙티브한 UI 개발에 경험이 있습니다. Vuex를 활용한 상태 관리와 Vue Router를 사용한 라우팅에 익숙합니다.</dd>
                <dd><em>Next.js</em>: 서버 사이드 렌더링(SSR)과 정적

                  사이트 생성(SSG)에 대한 이해를 바탕으로 Next.js 프레임워크를 활용한 웹 애플리케이션 개발에 경험이 있습니다. SEO 최적화 및 퍼포먼스 향상을 위한 기술적 전략 구현에 능숙합니다.</dd>
                <dd><em>MySQL</em>: 데이터베이스 설계 및 관리에 있어 실질적인 경험을 가지고 있습니다. SQL 쿼리 작성, 데이터베이스 최적화, 복잡한 조인 및 트랜잭션 처리에 능숙합니다.</dd>
                <dd><em>PHP</em>: 서버 사이드 스크립트 작성에 능숙하며, PHP를 사용한 데이터 관리와 동적 웹 페이지 생성에 경험이 있습니다. 객체지향 PHP 개발에 익숙하며, MVC 아키텍처를 이해하고 적용한 경험이 있습니다.</dd>
              </dl>
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

export default AboutLayer;
