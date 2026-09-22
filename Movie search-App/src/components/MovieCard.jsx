import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
        alt={movie.Title} 
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>
        <button style={{ padding: '5px 10px', cursor: 'pointer' }}>View Details</button>
      </Link>
    </div>
  );
}

export default MovieCard;