import '../components/css/MovieList.css'
import MovieCard from './MovieCard'

const MovieList = ( {movies} ) => {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard 
        key={movie.id} 
        img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
        title={movie.title} 
        rating={parseFloat(movie.vote_average).toFixed(2)}
        release_date={movie.release_date}
        overview={movie.overview}
        />
      ))};
    </div>
  )
}
export default MovieList  