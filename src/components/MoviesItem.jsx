import React from 'react';

function MoviesItem({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,
}) {
  return (
    <div className="card">
      <div className="card-image">
        {poster !== 'N/A' ? (
          <img src={poster} alt={title} />
        ) : (
          <h5>Poster is not found</h5>
        )}
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{title}</span>
        <span>{year}</span>
        <span className="right">{type}</span>
      </div>
    </div>
  );
}

export default MoviesItem;
