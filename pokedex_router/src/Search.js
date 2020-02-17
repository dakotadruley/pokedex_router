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
            </form>
            </div>
        )
    }
}