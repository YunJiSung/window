import React, { useState, useEffect } from 'react';

function LoadingAnimation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return <div className="loading">로딩중...</div>;
}

export default LoadingAnimation;
