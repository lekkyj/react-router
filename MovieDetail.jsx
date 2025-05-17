import { useParams, Link } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
