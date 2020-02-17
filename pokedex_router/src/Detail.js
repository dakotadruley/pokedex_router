import React, { Component } from 'react';
import { getPoke } from './services/API.js';
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    state = { poke: {} }

    async componentDidMount() {
        const data = await getPoke(this.props.match.params.pokeId);
        if (data.body) {

            this.setState({ poke: data.body })
        }
    }

    render() {
        const { poke } = this.state;
        return (
            <PokeItem poke={ poke } />
        );
    }
}

