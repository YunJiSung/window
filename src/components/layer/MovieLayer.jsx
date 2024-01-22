// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">Youtube API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</span>
//                         {/* 검색 및 카테고리 필터 */}
//                         <div className="info">
//                             <div>
//                                 <input type="search" placeholder="검색" />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li>all</li>
//                                     <li className="active">coding</li>
//                                     <li>react</li>
//                                     <li>node.js</li>
//                                     <li>javascript</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* 비디오 목록 */}
//                         <div className="view">
//                             {/* 비디오 목록 생성 로직 (임시 데이터 사용) */}
//                             {new Array(10).fill(null).map((_, index) => (
//                                 <div key={index} className="video">
//                                     <div className="img" style={{ backgroundImage: `url(placeholder-image-url)` }}></div>
//                                     <div className="title">비디오 제목 {index + 1}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;







// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('코딩');
//     const [activeCategory, setActiveCategory] = useState('');

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = 'https://api.themoviedb.org/3/movie/now_playing';
//                     break;
//                 case 'popular':
//                     url = 'https://api.themoviedb.org/3/movie/popular';
//                     break;
//                 case 'upcoming':
//                     url = 'https://api.themoviedb.org/3/movie/upcoming';
//                     break;
//                 case 'toprated':
//                     url = 'https://api.themoviedb.org/3/movie/top_rated';
//                     break;
//                 default:
//                     return;
//             }
//             url = `${url}?api_key=411a4542de8350a31fbd318eb41652b8`;
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (data && data.results) {
//                 setMovies(data.results);
//             } else {
//                 setMovies([]);
//             }
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         fetchMovies('category', '', category);
//         setActiveCategory(category);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 movie"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     {/* 컴포넌트 내용 (검색창, 카테고리, 영화 목록) */}
//                     {/* ... */}
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;












// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = 'https://api.themoviedb.org/3/movie/now_playing';
//                     break;
//                 case 'popular':
//                     url = 'https://api.themoviedb.org/3/movie/popular';
//                     break;
//                 case 'upcoming':
//                     url = 'https://api.themoviedb.org/3/movie/upcoming';
//                     break;
//                 case 'toprated':
//                     url = 'https://api.themoviedb.org/3/movie/top_rated';
//                     break;
//                 default:
//                     return;
//             }
//             url = `${url}?api_key=411a4542de8350a31fbd318eb41652b8`;
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results || []);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         fetchMovies('category', '', category);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 movie"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryClick('latest')}>최신영화</li>
//                                     <li onClick={() => handleCategoryClick('popular')}>인기영화</li>
//                                     <li onClick={() => handleCategoryClick('upcoming')}>개봉영화</li>
//                                     <li onClick={() => handleCategoryClick('toprated')}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie, index) => (
//                                 <div key={movie.id} className="video">
//                                     <div
//                                         className="img play__icon"
//                                         style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
//                                     ></div>
//                                     <div className="title">{movie.title}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;












// 2024.01.22
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = 'https://api.themoviedb.org/3/movie/now_playing';
//                     break;
//                 case 'popular':
//                     url = 'https://api.themoviedb.org/3/movie/popular';
//                     break;
//                 case 'upcoming':
//                     url = 'https://api.themoviedb.org/3/movie/upcoming';
//                     break;
//                 case 'toprated':
//                     url = 'https://api.themoviedb.org/3/movie/top_rated';
//                     break;
//                 default:
//                     return;
//             }
//             url = `${url}?api_key=411a4542de8350a31fbd318eb41652b8`;
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results || []);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         fetchMovies('category', '', category);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryClick('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryClick('popular')} className={activeCategory === 'latest' ? 'popular' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'latest' ? 'upcoming' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryClick('toprated')} className={activeCategory === 'latest' ? 'toprated' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('latest');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState('');

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else {
//             url = `https://api.themoviedb.org/3/movie/${category}?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => [...prevMovies, ...data.results]);
//                 setNextPageToken(data.nextPageToken || ''); // 다음 페이지 토큰 설정
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//                 setMovies([]); // 데이터 형식이 맞지 않으면 영화 목록을 비움
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//         setMovies([]);
//         setNextPageToken('');
//         fetchMovies('category', '', category);
//     };

//     const handleLoadMore = () => {
//         if (activeCategory) {
//             fetchMovies('category', '', activeCategory);
//         } else {
//             fetchMovies('search', query);
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryClick('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryClick('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryClick('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;















// 2024.01.22 카테고리 더보기 됨
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => type === 'category' ? data.results : [...prevMovies, ...data.results]);
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//                 setMovies([]);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         setMovies([]);
//         setNextPageToken(1);
//         fetchMovies('category', '', newCategory);
//     };

//     const handleLoadMore = () => {
//         fetchMovies('category', '', activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;












// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible && (query.trim() || activeCategory)) {
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     }, [isVisible, query, activeCategory]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => type === 'category' ? data.results : [...prevMovies, ...data.results]);
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//                 setMovies([]);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         setMovies([]);
//         setNextPageToken(1);
//         fetchMovies('category', '', newCategory);
//     };

//     const handleLoadMore = () => {
//         fetchMovies('search', query, activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;















// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible && (query.trim() || activeCategory)) {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     }, [isVisible, query, activeCategory]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => [...prevMovies, ...data.results]);
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//                 setMovies([]);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//         // 검색어 변경 시 바로 검색하도록 fetchMovies 호출 추가
//         fetchMovies('search', event.target.value, activeCategory);
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         setMovies([]);
//         setNextPageToken(1);
//         fetchMovies('category', '', newCategory);
//     };

//     const handleLoadMore = () => {
//         fetchMovies('search', query, activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;













// 검색 기능 빼고 됨
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible && (query.trim() || activeCategory)) {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     }, [isVisible, query, activeCategory]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();


//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => [...prevMovies, ...data.results]);
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//         if (!event.target.value) {
//             // 검색어가 비어있을 때는 기존 목록을 유지합니다.
//             return;
//         }
//         setMovies([]);
//         setNextPageToken(1);
//         fetchMovies('search', event.target.value, activeCategory);
//     };
//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         setMovies([]);
//         setNextPageToken(1);
//         fetchMovies('category', '', newCategory);
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;


























// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible && query.trim()) {
//             setMovies([]); // 검색 시 기존 목록을 비웁니다.
//             setNextPageToken(1);
//             fetchMovies('search', query);
//         }
//     }, [isVisible, query]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (Array.isArray(data.results)) {
//                 setMovies(prevMovies => [...prevMovies, ...data.results]);
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         setMovies([]); // 이전 영화 목록 초기화
//         setNextPageToken(1); // 페이지 토큰을 초기화하여 처음부터 데이터를 불러옴
//         fetchMovies('category', '', newCategory); // 새로운 카테고리에 해당하는 영화 목록을 불러옴
//     };

//     const handleLoadMore = () => {
//         if (nextPageToken) {
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;





























































// 검색 빼고 다 됨
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [categoryMovies, setCategoryMovies] = useState({});
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('latest');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible) {
//             if (!categoryMovies[activeCategory]) {
//                 fetchMovies('category', '', activeCategory);
//             } else {
//                 setMovies(categoryMovies[activeCategory]);
//             }
//         }
//     }, [isVisible, activeCategory, categoryMovies]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (Array.isArray(data.results)) {
//                 const newMovies = [...(categoryMovies[category] || []), ...data.results];
//                 setMovies(newMovies);
//                 setCategoryMovies({ ...categoryMovies, [category]: newMovies });
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('받은 데이터가 예상한 형식이 아닙니다:', data);
//             }
//         } catch (error) {
//             console.error('영화를 불러오는 중 오류 발생:', error);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         if (!categoryMovies[newCategory]) {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies('category', '', newCategory);
//         } else {
//             setMovies(categoryMovies[newCategory]);
//         }
//     };

//     const handleLoadMore = () => {
//         fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [categoryMovies, setCategoryMovies] = useState({});
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('latest');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible) {
//             if (!categoryMovies[activeCategory]) {
//                 fetchMovies('category', '', activeCategory);
//             } else {
//                 setMovies(categoryMovies[activeCategory]);
//             }
//         }
//     }, [isVisible, activeCategory, categoryMovies]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (Array.isArray(data.results)) {
//                 const newMovies = type === 'search' ? data.results : [...(categoryMovies[category] || []), ...data.results];
//                 setMovies(newMovies);
//                 setCategoryMovies({ ...categoryMovies, [category]: newMovies });
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('Received data is not in expected format:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleSearchKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies('search', query);
//         }
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         if (!categoryMovies[newCategory]) {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies('category', '', newCategory);
//         } else {
//             setMovies(categoryMovies[newCategory]);
//         }
//     };

//     const handleLoadMore = () => {
//         fetchMovies(activeCategory === 'search' ? 'search' : 'category', query, activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                     onKeyDown={handleSearchKeyDown}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [categoryMovies, setCategoryMovies] = useState({});
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('latest');
//     const [nextPageToken, setNextPageToken] = useState(1);

//     useEffect(() => {
//         if (isVisible) {
//             if (!categoryMovies[activeCategory]) {
//                 fetchMovies('category', '', activeCategory);
//             } else {
//                 setMovies(categoryMovies[activeCategory]);
//             }
//         }
//     }, [isVisible, activeCategory, categoryMovies]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;

//         // 새 검색을 위한 상태 초기화
//         if (type === 'search' && nextPageToken === 1) {
//             setMovies([]);
//             setCategoryMovies({});
//         }

//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${nextPageToken}`;
//         } else {
//             // 카테고리별 URL 설정
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${nextPageToken}`;
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (Array.isArray(data.results)) {
//                 const newMovies = type === 'search' ? data.results : [...(categoryMovies[category] || []), ...data.results];
//                 setMovies(newMovies);
//                 setCategoryMovies({ ...categoryMovies, [category]: newMovies });
//                 setNextPageToken(data.page + 1);
//             } else {
//                 console.error('Received data is not in expected format:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleSearchKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             setNextPageToken(1); // 새 검색을 위해 페이지 토큰 재설정
//             fetchMovies('search', query);
//         }
//     };

//     const handleCategoryChange = (newCategory) => {
//         setActiveCategory(newCategory);
//         if (!categoryMovies[newCategory]) {
//             setMovies([]);
//             setNextPageToken(1);
//             fetchMovies('category', '', newCategory);
//         } else {
//             setMovies(categoryMovies[newCategory]);
//         }
//     };

//     const handleLoadMore = () => {
//         fetchMovies(activeCategory === 'search' ? 'search' : 'category', query, activeCategory);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 유튜버</h3>
//                         <span className="small">영화 소개 검색</span>
//                         <div className="info">
//                             <div>
//                                 <input
//                                     type="search"
//                                     placeholder="검색"
//                                     value={query}
//                                     onChange={handleSearchChange}
//                                     onKeyDown={handleSearchKeyDown}
//                                 />
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                     <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                     <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                     <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');

//     useEffect(() => {
//         if (isVisible && (query.trim() || activeCategory)) {
//             fetchMovies(activeCategory ? 'category' : 'search', query, activeCategory);
//         }
//     }, [isVisible, query, activeCategory]);

//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else if (type === 'category') {
//             switch (category) {
//                 case 'latest':
//                     url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'popular':
//                     url = 'https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'upcoming':
//                     url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'toprated':
//                     url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results || []);
//         } catch (error) {
//             console.error('영화 정보 가져오기 오류:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 탐색기</h3>
//                         <span className="small">영화 검색</span>
//                         <div className="info">
//                             <input
//                                 type="search"
//                                 placeholder="검색"
//                                 value={query}
//                                 onChange={handleSearchChange}
//                             />
//                             <ul>
//                                 <li onClick={() => handleCategoryClick('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                 <li onClick={() => handleCategoryClick('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                 <li onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                 <li onClick={() => handleCategoryClick('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                             </ul>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {/* {nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )} */}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;



// 검색 기능 완료
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');

//     useEffect(() => {
//         if (isVisible) {
//             const fetchType = query.trim() ? 'search' : 'category';
//             fetchMovies(fetchType, query, activeCategory);
//         }
//     }, [isVisible, query, activeCategory]);


//     const fetchMovies = async (type, searchTerm = '', category = '') => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}`;
//         } else if (type === 'category') {
//             switch (category) {
//                 case 'latest':
//                     url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'popular':
//                     url = 'https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'upcoming':
//                     url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 case 'toprated':
//                     url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8';
//                     break;
//                 default:
//                     return;
//             }
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results || []);
//         } catch (error) {
//             console.error('영화 정보 가져오기 오류:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//         setQuery(''); // 검색 쿼리 초기화
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 탐색기</h3>
//                         <span className="small">영화 검색</span>
//                         <div className="info">
//                             <input
//                                 type="search"
//                                 placeholder="검색"
//                                 value={query}
//                                 onChange={handleSearchChange}
//                             />
//                             <ul>
//                                 <li onClick={() => handleCategoryClick('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                 <li onClick={() => handleCategoryClick('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                 <li onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                 <li onClick={() => handleCategoryClick('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>

//                             </ul>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {nextPageToken && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;


// 완성
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function MovieLayer({ isVisible, toggleVisibility }) {
//     const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//     const [activeCategory, setActiveCategory] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         if (isVisible) {
//             fetchMovies(query.trim() ? 'search' : 'category', query, activeCategory, currentPage);
//         }
//     }, [isVisible, query, activeCategory, currentPage]);

//     const fetchMovies = async (type, searchTerm = '', category = '', page = 1) => {
//         let url;
//         if (type === 'search') {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${page}`;
//         } else if (type === 'category') {
//             switch (category) {
//                 case 'latest':
//                     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
//                     break;
//                 case 'popular':
//                     url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
//                     break;
//                 case 'upcoming':
//                     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
//                     break;
//                 case 'toprated':
//                     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
//                     break;
//                 default:
//                     return;
//             }
//         }
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (page > 1) {
//                 setMovies(prevMovies => [...prevMovies, ...data.results]);
//             } else {
//                 setMovies(data.results || []);
//             }
//         } catch (error) {
//             console.error('영화 정보 가져오기 오류:', error);
//             setMovies([]);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setQuery(event.target.value);
//         setCurrentPage(1);  // 페이지 번호 초기화
//         setMovies([]);      // 기존 영화 목록 초기화
//     };

//     const handleCategoryChange = (category) => {
//         setActiveCategory(category);
//         setQuery('');       // 검색 쿼리 초기화
//         setCurrentPage(1);  // 페이지 번호 초기화
//         setMovies([]);      // 기존 영화 목록 초기화
//     };
//     const handleLoadMore = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="layer layer3 youtube"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                 >
//                     <div className="layer__contents">
//                         <h3>영화 탐색기</h3>
//                         <span className="small">영화 검색</span>
//                         <div className="info">
//                             <input
//                                 type="search"
//                                 placeholder="검색"
//                                 value={query}
//                                 onChange={handleSearchChange}
//                             />
//                             <ul>
//                                 <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
//                                 <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
//                                 <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
//                                 <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
//                             </ul>
//                         </div>
//                         <div className="view">
//                             {movies.map((movie) => (
//                                 <div key={movie.id} className="video">
//                                     <a
//                                         href={`https://www.themoviedb.org/movie/${movie.id}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div
//                                             className="img play__icon"
//                                             style={{
//                                                 backgroundImage: movie.poster_path
//                                                     ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
//                                                     : `url('default-image-url.jpg')`
//                                             }}
//                                         />
//                                         <div className="title">{movie.title}</div>
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                         {movies.length > 0 && (
//                             <div className="load__more">
//                                 <button onClick={handleLoadMore}>더보기</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="layer__footer">
//                         <span className="close" onClick={toggleVisibility}></span>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default MovieLayer;








import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MovieLayer({ isVisible, toggleVisibility }) {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('latest');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // 컴포넌트 마운트 시 최신영화 목록을 불러옵니다
        if (isVisible) {
            fetchMovies('category', '', 'latest', 1);
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            fetchMovies(query.trim() ? 'search' : 'category', query, activeCategory, currentPage);
        }
    }, [isVisible, query, activeCategory, currentPage]);

    const fetchMovies = async (type, searchTerm = '', category = '', page = 1) => {
        let url;
        if (type === 'search') {
            url = `https://api.themoviedb.org/3/search/movie?api_key=411a4542de8350a31fbd318eb41652b8&query=${encodeURIComponent(searchTerm)}&page=${page}`;
        } else if (type === 'category') {
            switch (category) {
                case 'latest':
                    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
                    break;
                case 'popular':
                    url = `https://api.themoviedb.org/3/movie/popular?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
                    break;
                case 'upcoming':
                    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
                    break;
                case 'toprated':
                    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=411a4542de8350a31fbd318eb41652b8&page=${page}`;
                    break;
                default:
                    return;
            }
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (page > 1) {
                setMovies(prevMovies => [...prevMovies, ...data.results]);
            } else {
                setMovies(data.results || []);
            }
        } catch (error) {
            console.error('영화 정보 가져오기 오류:', error);
            setMovies([]);
        }
    };

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1);  // 페이지 번호 초기화
        setMovies([]);      // 기존 영화 목록 초기화
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setQuery('');       // 검색 쿼리 초기화
        setCurrentPage(1);  // 페이지 번호 초기화
        setMovies([]);      // 기존 영화 목록 초기화
    };
    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

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
                        <h3>영화 탐색기</h3>
                        <span className="small">영화 검색</span>
                        <div className="info">
                            <input
                                type="search"
                                placeholder="검색"
                                value={query}
                                onChange={handleSearchChange}
                            />
                            <ul>
                                <li onClick={() => handleCategoryChange('latest')} className={activeCategory === 'latest' ? 'active' : ''}>최신영화</li>
                                <li onClick={() => handleCategoryChange('popular')} className={activeCategory === 'popular' ? 'active' : ''}>인기영화</li>
                                <li onClick={() => handleCategoryChange('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>개봉영화</li>
                                <li onClick={() => handleCategoryChange('toprated')} className={activeCategory === 'toprated' ? 'active' : ''}>최고평점</li>
                            </ul>
                        </div>
                        <div className="view">
                            {movies.map((movie) => (
                                <div key={movie.id} className="video">
                                    <a
                                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            className="img play__icon"
                                            style={{
                                                backgroundImage: movie.poster_path
                                                    ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                                                    : `url('default-image-url.jpg')`
                                            }}
                                        />
                                        <div className="title">{movie.title}</div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {movies.length > 0 && (
                            <div className="load__more">
                                <button onClick={handleLoadMore}>더보기</button>
                            </div>
                        )}
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
