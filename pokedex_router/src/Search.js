import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='searchDiv'>
            <form onSubmit={this.props.handleSearch}>
                <label for='search'><strong>Search: </strong></label>
                <input
                id='search'
                value={this.props.searchQuery || ''}
                onChange={this.props.handleChange}/>
              <span> </span><button className='button'><strong>Search</strong></button>
              <div>
                  <label><strong>Type: </strong><input type='radio' name='searchType' value='type' onClick={this.props.handleType}></input></label>
                  <span> </span>
                  <label><strong>Ability: </strong><input type='radio' name='searchType' value='ability' onClick={this.props.handleType}></input></label>
              </div>
            </form>
            </div>
        )
    }
}