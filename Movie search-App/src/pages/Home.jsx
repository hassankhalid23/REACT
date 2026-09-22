import { useState } from 'react';
import MovieCard from '../components/MovieCard';

const API_KEY = 'fe7bf599';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No movies found!');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <form onSubmit={searchMovies} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Search</button>
      </form>

      {loading && <h3>Loading movies...</h3>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;