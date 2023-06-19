import React from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = { moviesData: [], loading: true };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Transformers`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({ moviesData: data.Search, loading: false })
      )
      .catch((e) => console.log(e));
  }

  updateMovies = (title, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({ moviesData: data.Search, loading: false })
      )
      .catch((e) => console.log(e));
  };

  render() {
    const { moviesData, loading } = this.state;

    return (
      <main className="main container">
        <Search updateData={this.updateMovies} />

        {loading ? <Preloader /> : <MoviesList movies={moviesData} />}
      </main>
    );
  }
}

export default Main;
