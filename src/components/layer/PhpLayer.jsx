
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
                            <span><a href="http://capitaljs10.dothome.co.kr/blog_php/index.html" target="_blank" rel="noopener noreferrer" className="ko">
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



