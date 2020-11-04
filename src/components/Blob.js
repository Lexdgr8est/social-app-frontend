import React from 'react'

const Blob = () => {
    return (
        <div style={blobStyle}>
           <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgb(255, 95, 109)'}}></stop>
                <stop offset="100%" style={{stopColor: 'rgb(255, 195, 113)'}}></stop>
                </linearGradient>
            </defs>
            <path id="blob" d="M457,309.5Q456,369,411.5,411Q367,453,308.5,431Q250,409,199.5,417Q149,425,97.5,396.5Q46,368,51.5,309Q57,250,82.5,209Q108,168,131,126Q154,84,202,82Q250,80,294.5,88Q339,96,386,120Q433,144,445.5,197Q458,250,457,309.5Z" fill="url(#gradient)"></path>
            </svg> 
        </div>
    )
}

const blobStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '40%',
    zIndex: '-1',
    opacity: '0.8'
}

export default Blob


