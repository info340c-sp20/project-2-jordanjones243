import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Stats from './Stats';
import Footer from './Footer';
import { Button } from 'reactstrap';

class SinglePage extends Component {
    state = {
        display: <NewsFeed />
    }

    displayNews = () => {
        this.setState({
            display: <NewsFeed />
        })
    }

    displayStats = () => {
        this.setState({
            display: <Stats />
        })
    }

    render() {
        return (
            <main>
                <div>
                    <section className="column1">
                        <h2>Menu</h2>
                        <div className="card-container">
                            <div className="card border">
                                <Button className="link" style={{textAlign: "center", backgroundColor: "orange"}} onClick={this.displayNews}>News Feed</Button>
                            </div>
                            <div className="card border">
                                <Button className="link" style={{textAlign: "center", backgroundColor: "orange"}} onClick={this.displayStats}>Stats</Button>
                            </div>
                            <div className="card border">
                                <Button className="link" style={{textAlign: "center", backgroundColor: "orange"}}>Fantasy Team</Button>
                            </div>
                        </div>
                    </section>
                    {this.state.display}
                </div>
                <Footer />
            </main>
        )
    }
}

export default SinglePage;