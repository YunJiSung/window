import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // 검색 로직 추가
  };

  return (
    <div className="search">
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <span></span> {/* 검색 아이콘 또는 버튼 */}
    </div>
  );
}

export default Search;
