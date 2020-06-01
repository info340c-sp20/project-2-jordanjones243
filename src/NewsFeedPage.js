import React, { Component } from 'react';
import Menu from './Menu';
import NewsFeed from './NewsFeed';
import Favorites from './Favorites';
import Footer from './Footer';

class NewsFeedPage extends Component {
    render() {
        return (
            <main>
                <div>
                    <Menu />
                    <NewsFeed />
                </div>
                <Footer />
            </main>
        )
    }
}

export default NewsFeedPage;