import React from 'react';
import {
    Link
} from 'react-router-dom';
import "./Description.css";

function Description(props) {
    console.log(props);
    const { image, name } = props.location.state.receipe;
    return (
        <div className="description">
            <img className="description__img1" src="/images/Illustration2.png" alt="illustrations2" />
            <img className="description__img2" src="/images/Illustration3.png" alt="illustrations3" />
            <img className="description__img3" src="/images//Illustration5.png" alt="illustrations5" />
            <img className="description__img4" src="/images//Illustration4.png" alt="illustrations4" />
            <img className="description__img5" src="/images//Illustration1.png" alt="illustrations1" />
            <h2 className="home"><Link to="/">&#8592;</Link></h2>
            <div className="description__container">
                <div className="description__detail">
                    <div style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${image})`,
                        backgroundPosition: 'top center',
                        backgroundSize: "cover",
                        borderRadius: '10px',
                        width: "470px",
                        height: "250px",
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'contain',
                        color: '#fff',
                        boxShadow: '0 8px 8px rgba(0, 0, 0,0.2)',
                        cursor: 'pointer'
                    }}>
                        <img src='/images/play.png' alt="play-button" />
                        <h4>Play Video</h4>
                    </div>
                    <h3>Incredients :</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h3>How to Prepare :</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="right-info">
                    <div className="right">
                        <p>RECEIPE</p>
                        <h2>{name}</h2>
                        <h5><span className="rating">4.0 </span><span>⭐️ ⭐️ ⭐️ ⭐️</span></h5>
                        <h4>DESCRIPTION</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam</p>
                    </div>
                    <div className="info">
                        <div className="info__data">
                            <h2>8</h2>
                            <p>Incredients</p>
                        </div>
                        <div className="info__data">
                            <h2>220</h2>
                            <p>Incredients</p>
                        </div>
                        <div className="info__data--bucks">
                            <h2>25</h2>
                            <p>bucks</p>
                        </div>
                    </div>
                    <div className="comment-section">
                        <h3>Favourite this receipe <span>❤️</span></h3>
                        <hr />
                        <h4>ADD COMMENTS</h4>
                        <form className="comment-form">
                            <textarea className="comments" cols="60" rows="8" placeholder="Type your Comments..." />
                            <button className="addComment">ADD COMMENT</button>
                        </form>
                    </div>
                </div>
                <h2 className="footer-text">Your foood tast yummy</h2>
            </div>
        </div>


    )
}

export default Description
