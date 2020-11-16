import React, {useRef, useEffect} from 'react'

const TopButton = () => {
    // Set useRef
    const topRef = useRef();


    // Scroll Function
    const topScroll = (e) => {
        let target = 0;
        let duration = 1000;
        let start = window.pageYOffset;
        let distance = -start;
        let startTime = null;
    
        function animation (currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
    
        function ease (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t + b;
            t -= 2;
            return -c/2 * (t*t*t*t - 2) + b;
        };
        
    
        requestAnimationFrame(animation);
    }

    // Event listener function
    const handleScroll = () => {
        if( window.scrollY > 500) {
            topRef.current.style.display = 'flex';
        } else if (window.scrollY <= 500) {
            topRef.current.style.display = 'none';
        }
    }

    // Set scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div style={top} onClick={topScroll} ref={topRef}>
            <i className="fas fa-chevron-up"></i>
        </div>
    )
}

const top = {
    position: 'fixed',
    right: '50px',
    bottom: '50px',
    background: '#0063b2ff',
    color: '#f4f4f4',
    cursor: 'pointer',
    padding: '0.9rem',
    borderRadius: '50%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)'
}

export default TopButton
