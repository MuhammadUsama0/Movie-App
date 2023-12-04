import React from 'react';
import './Movieitem.css';

function Movieitem({ item }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  // Check if item is undefined before accessing its properties
  if (!item) {
    return <div className="card col-lg-3 moviecard">No data available</div>;
  }

  return (
    <div className="card col-lg-3 moviecard">
      {/* Check if poster_path is available before rendering the image */}
      {item.poster_path ? (
        <img src={`${baseUrl}${item.poster_path}`} className="img-fluid" alt="img" />
      ) : (
        <div>No poster available</div>
      )}
      <div className="card-body">
        <h3>Rating: {item.vote_average}</h3>
        {/* Add other movie details as needed */}
      </div>
    </div>
  );
}

export default Movieitem;
