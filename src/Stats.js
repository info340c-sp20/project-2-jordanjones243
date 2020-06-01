import React, { Component } from 'react';
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';

class Stats extends Component {
    state = {
        display: null
    }

    displayPlayer = () => {
        this.setState({
            display: <PlayerStats />
        })
    }

    displayTeam = () => {
        this.setState({
            display:<TeamStats />
        })
    }

    render() {
        return (
            <section className="column2">
                <h2>Stats</h2>
                <h3>Would you like to view player or team stats?</h3>
                <form className="stats">
                    <input htmlFor="radio" type="radio" id="player" name="stats" value="player" onClick={this.displayPlayer}/>
                    <label htmlFor="player" className="stat-input">Player</label>
                    <input htmlFor="radio" type="radio" id="team" name="stats" value="team" onClick={this.displayTeam}/>
                    <label htmlFor="team" className="stat-input">Team</label>
                </form>
                <div className="table-box">
                <table>
                    <tbody>
                        {this.state.display}
                    </tbody>
                </table>
                </div>
            </section>
        )
    }
}

export default Stats;

