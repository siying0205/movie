import React from 'react'

const MovieCard = () => {
  return (
    <div className="movie">
      <div>
        <p>year</p>
      </div>

      <div>
        <img src="https://via.placeholder.com/400" alt="movie poster" />
      </div>

      <div>
        <span>Type</span>
        <h3>Movie Title</h3>
      </div>
    </div>
  )
}

export default MovieCard
