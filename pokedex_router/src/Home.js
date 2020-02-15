import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import PokeItem from './PokeItem.js';
import Search from './Search.js';

export default class Home extends Component {
    state = {
        searchQuery: this.props.match.params.pokemon,
        pokes: [],
    }

    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)

            this.setState({ pokes: data.body.results, })
        }
    }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)

        this.setState({
            pokes: data.body.results, })
        
        this.props.history.push(this.state.searchQuery)
    }

    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    render() {
      return (
          <>
          <Search
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
            />
           <ul>
               {
                this.state.pokes.map(poke =>
                <Link to={`pokes/${poke.pokemon}`}>
                    <PokeItem poke={poke} />
                </Link>)
                }
          </ul> 
          </>
      );
    }
}