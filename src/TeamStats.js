import React, { Component } from 'react';

class TeamStats extends Component {
    state = {
        teamStats: []
    }    

    index = 0

    componentDidMount() {
        fetch('data/Team-Stats-2020.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    teamStats: data
                })
            })
    }

    render() {
        let bodyArray = this.state.teamStats.map((item) => {
            let mappers = item.row.split(',').map((word) => {
                return <td key={word + '' + this.index++}>{word}</td>
            })
            return <tr key={item  + '' + this.index++}>{mappers}</tr>
        })
        return bodyArray;
    }
}

export default TeamStats;