import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
