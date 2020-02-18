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
        const {
            ability_1,
            height,
            weight,
            attack,
            defense,
            hp,
            speed,
        } = poke;
        console.log(poke);
        return (
            <div id='detailPoke'>
                <ul className='pokeContainer'>
                    <PokeItem poke={ poke } />
                </ul>
                <table id='detailTable'>
                    <h2 id='detailHeader'>Pokémon Detail Stats</h2>
                    <tr>
                    <td><strong>ability:</strong> { ability_1 }</td>
                    </tr>
                    <tr>
                        <td><strong>height:</strong> { height }</td>
                        <td><strong>weight:</strong> { weight }</td>
                    </tr>
                    <tr>
                        <td><strong>attack:</strong> { attack }</td>
                        <td><strong>defense:</strong> { defense }</td>
                    </tr>
                    <tr>
                        <td><strong>hp:</strong> { hp }</td>
                        <td><strong>speed:</strong> { speed }</td>
                    </tr>
                </table>
            </div>
        );
    }
}

