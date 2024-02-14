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
