import React, { Component } from 'react';

class PlayerStats extends Component {
    state = {
        playerStats: []
    }    

    index = 0

    componentDidMount() {
        fetch('data/Player-Stats-2020.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    playerStats: data
                })
            })
    }

    render() {
        let bodyArray = this.state.playerStats.map((item) => {
            let mappers = item.row.split(',').map((word) => {
                return <td key={word + '' + this.index++}>{word}</td>
            })
            return <tr key={item + '' + this.index++}>{mappers}</tr>
        })
        return bodyArray;
    }
}

export default PlayerStats;