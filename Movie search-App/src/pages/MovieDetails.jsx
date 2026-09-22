import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = 'fe7bf599';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await res.json();

        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading details...</h2>;
  if (error) return <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '15px' }}>← Back to Search</Link>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '250px' }} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
}

export default MovieDetails;