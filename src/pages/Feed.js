import React, {useRef, useEffect} from 'react';
import Slider from '../components/Slider';

const Feed = () => {
    const imgRef = useRef();
    useEffect(() => {
        let imgChild = imgRef.current.children;
        if (imgChild.length === 1) {
            imgRef.current.style.gridTemplateColumns = 'repeat(1, 1fr)';
        } else if (imgChild.length === 2 || imgChild.length === 4) {
            imgRef.current.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (imgChild.length === 3) {
            imgRef.current.style.gridTemplateColumns = 'repeat(2, 1fr)';
            imgChild[1].style.gridRow = '1/3';
            console.log(imgChild[1]);
        }
        return () => {
            
        }
    }, [])

    return (
        <main className="home">

            {/* Menu Part */}
            <div className="menu">
                <h1 className="title">SOCiaL</h1>
                <div className="welcome-msg">
                    <img src="images/profile.JPG" alt=""/>
                    <div>Welcome</div>
                    <h3>Raji Oladeji</h3>
                </div>
                <div className="menu-links">
                    <h2>Menu</h2>
                    <ul>
                        <li><i className="fas fa-home"></i>Home</li>
                        <li><i className="fas fa-envelope"></i>Messages</li>
                        <li><i className="fas fa-user-alt"></i>Profile</li>
                        <li><i className="fas fa-cog"></i>Settings</li>
                    </ul>
                </div>
                <div className="darkmode">
                    <div className="flex">
                        <span>Darkmode</span>
                        <Slider />
                    </div>
                    <p>Click here to activate darkmode</p>
                </div>
            </div>

            {/* Feed Part */}
            <div className="feed-container">
            <h1 className="title">Feed</h1>
            
                <div className="feed">
                    <div className="post">
                        <div className="author">
                            <img src="images/profile.JPG" alt=""/>
                            <div className="author-info">
                                <h3>Raji Oladeji . <span>5h</span> </h3>
                            </div>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus temporibus in reprehenderit ad deserunt.</p>
                            <div className="image-container" ref={imgRef}>
                                <img src="images/profile.JPG" alt=""/>
                                <img src="images/profile.JPG" alt=""/>
                                <img src="images/profile.JPG" alt=""/>
                            </div>
                        </div>
                        <div className="reaction">
                            <div><i className="far fa-heart"></i>Like</div>
                            <div><i className="far fa-comments"></i>Comment</div>
                            <div><i className="fas fa-share"></i>Share</div>
                        </div>
                    </div>
                </div>
               
               
            </div>
          


            <div className="aux">
                <div className="search-bar">
                    <input type="text" placeholder="search..."/>
                    <i className="fas fa-search"></i>
                </div>
                <div className="suggestions">
                    <div className="sugg-head">
                        <h2>Suggestions For You</h2>
                        <h4>See All</h4>
                    </div>
                    <div className="sugg-cont">
                        <div className="sugg-people flex">
                            <div className="sugg-profile">
                                <img src="images/profile.JPG" alt=""/>
                                <h2>Raji Oladeji</h2>
                                <h4>@dedje</h4>
                            </div>
                            <div className="sugg-follow">
                                <button className="btn btn-primary">Follow</button>
                            </div>
                        </div>
                        <div className="sugg-people flex">
                            <div className="sugg-profile">
                                <img src="images/profile.JPG" alt=""/>
                                <h2>Raji Oladeji</h2>
                                <h4>@dedje</h4>
                            </div>
                            <div className="sugg-follow">
                                <button className="btn btn-primary">Follow</button>
                            </div>
                        </div>
                        <div className="sugg-people flex">
                            <div className="sugg-profile">
                                <img src="images/profile.JPG" alt=""/>
                                <h2>Raji Oladeji</h2>
                                <h4>@dedje</h4>
                            </div>
                            <div className="sugg-follow">
                                <button className="btn btn-primary">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hashtags">
                    <h1>Hashtags</h1>
                    <div className="tag-container">
                        <div className="tag">Dewj</div>
                        <div className="tag">Dewj</div>
                        <div className="tag">Dewj</div>
                        <div className="tag">Dewj</div>
                        <div className="tag">Dewj</div>
                        <div className="tag">Dewj</div>
                        <div className="tag">Dlllllewj</div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Feed
