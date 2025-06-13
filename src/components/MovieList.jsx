import '../components/css/MovieList.css'
import MovieCard from './MovieCard'

const MovieList = ( {movies, toggleFav={toggleFav}, fav={fav}, toggleWatch={toggleWatch}, watched={watched} } ) => {
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
        key={movie.id}
        {...movie}
        toggleFav={toggleFav}
        fav={fav.some(fav => fav.id === movie.id)}
        toggleWatch={toggleWatch}
        watched={watched.some(watched => watched.id === movie.id)}
        />
      ))}
    </div>
  )
}
export default MovieList  