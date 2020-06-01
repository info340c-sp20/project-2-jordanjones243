import React, { Component } from 'react';
import star from './star.png';
import lebron from './lebron.jpg';

class NewsFeed extends Component {
    render() {
        return (
            <section className="column2">
                <h2>News Feed</h2>
                <div className="news-box">
                    <div className="news-card">
                        <p className="lebron"><img src={star} alt="star" className="star" /> Lebron James moves up to 3rd on the NBA all-time scoring list! <img src={star} alt="star" className="star" /></p>
                        <img src={lebron} alt="lebron james" className="news-post" />
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsFeed;