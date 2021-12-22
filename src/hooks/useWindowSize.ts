import { useState, useEffect } from 'react';

/**
 * windowの高さと幅を取得
 */
export const useWindowSize = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {winW: width, winH: height};
    }
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return windowDimensions;
}