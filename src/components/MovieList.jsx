import '../components/css/MovieList.css'
import MovieCard from './MovieCard'

const MovieList = ( {movies} ) => {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard 
        id={movie.id} 
        img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
        modalImg={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
        title={movie.title} 
        rating={parseFloat(movie.vote_average).toFixed(1)}
        release_date={movie.release_date}
        overview={movie.overview}
        popularity={movie.popularity}
        />
      ))}
    </div>
  )
}
export default MovieList  