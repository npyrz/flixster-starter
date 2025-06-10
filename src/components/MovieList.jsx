import '../components/css/MovieList.css'
import MovieCard from './MovieCard'

const MovieList = () => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA4ZDk5MTcwN2M5ZDM4ODM1ODIxNmFmMzc1ZTEyZSIsIm5iZiI6MTc0OTUxMjUyNS4yNzYsInN1YiI6IjY4NDc3MTRkNjZhNGY4MjAxZjNmY2MzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ag3p2uZw06CpzmCAPXbNd4nGXxeDmxMwfmrAxNMexPI'
  }
};

// NO HARD CODE ^^

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

  return (
    <div className="MovieList">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
  )
}
export default MovieList  