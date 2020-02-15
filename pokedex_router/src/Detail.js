import React, { Component } from 'react';
import { getPoke } from './services/API.js';
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    state = { poke: {} }

    async componentDidMount() {
        const data = await getPoke(this.props.match.params.pokeId);

        if (data.body.results) {

            this.setState({ poke: data.body.results[0] })
        }
    }

    render() {
        const { poke } = this.state;

        return (
            <PokeItem poke={ poke } />
        );
    }
}

// _id: "5cef3501ef6005a77cd4fd16" => getting the poke id