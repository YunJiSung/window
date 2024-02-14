import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

function YoutubeLayer({ isVisible, toggleVisibility }) {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('코딩');
  const [activeCategory, setActiveCategory] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');

  useEffect(() => {
    if (isVisible && query.trim()) {
      fetchVideos(query);
    }
  }, [isVisible, query]);

  const fetchVideos = async (searchQuery, pageToken = '') => {

    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          part: 'snippet',
          maxResults: '10',
          q: searchQuery,
          pageToken: pageToken
        },
        headers: {
          'X-RapidAPI-Key': 'bdaedafc9amsh88e9127558b2c63p14bf05jsn90433905b519',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      });
      if (pageToken) {
        setVideos(prevVideos => [...prevVideos, ...data.items]);
      } else {
        setVideos(data.items);
      }
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setQuery(category);
    setActiveCategory(category);
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(query, nextPageToken);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="layer layer2 youtube"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="layer__contents">
            <h3>코딩 유튜버</h3>
            <span className="small">Youtube API를 이용하여 코딩 관련된 최신 영상을 보여줍니다.</span>
            <div className="info">
              <div>
                <input
                  type="search"
                  placeholder="검색"
                  value={query}
                  onChange={handleSearchChange}
                />
              </div>
              <div>
                <ul>
                  <li onClick={() => handleCategoryClick('all')} className={activeCategory === 'all' ? 'active' : ''}>all</li>
                  <li onClick={() => handleCategoryClick('coding')} className={activeCategory === 'coding' ? 'active' : ''}>coding</li>
                  <li onClick={() => handleCategoryClick('react.js')} className={activeCategory === 'react.js' ? 'active' : ''}>react.js</li>
                  <li onClick={() => handleCategoryClick('node.js')} className={activeCategory === 'node.js' ? 'active' : ''}>node.js</li>
                  <li onClick={() => handleCategoryClick('javascript')} className={activeCategory === 'javascript' ? 'active' : ''}>javascript</li>
                </ul>
              </div>
            </div>
            <div className="view">
              {videos.map((video, index) => (
                <div
                  key={video.id.videoId}
                  className="video"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank', 'noopener,noreferrer')}
                >
                  <div
                    className="img play__icon"
                    style={{ backgroundImage: `url(${video.snippet.thumbnails.medium.url})` }}
                  ></div>
                  <div className="title">{video.snippet.title}</div>
                </div>
              ))}
            </div>
            {nextPageToken && (
              <div className="load__more">
                <button onClick={handleLoadMore}>더보기</button>
              </div>
            )}
          </div>
          <div className="layer__footer">
            <div>😏 유튜브를 통해 코딩 영상을 보면 유혹들이 많습니다. 여기서 보면 최신 코딩만 광고 없이 볼 수 있습니다.</div>
            <span className="close" onClick={toggleVisibility}></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default YoutubeLayer;
