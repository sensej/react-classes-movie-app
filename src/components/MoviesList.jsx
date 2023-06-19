import React from 'react';
import MoviesItem from './MoviesItem';

function MoviesList({ movies = [] }) {
  return (
    <div>
      <div className="movies-list">
        {movies.length ? (
          movies.map((movie) => {
            return <MoviesItem key={movie.imdbID} {...movie} />;
          })
        ) : (
          <h4>Nothing found</h4>
        )}
      </div>
    </div>
  );
}

export default MoviesList;
