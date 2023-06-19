import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.updateData(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.updateData(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <input
          placeholder="Search"
          type="search"
          className="validate search-input"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <div style={{ padding: '5px' }}>
          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap grey darken-3"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap grey darken-3"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>

          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap grey darken-3"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
        <button
          className="btn grey darken-3 search-btn"
          onClick={() =>
            this.props.updateData(this.state.search, this.state.type)
          }
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
