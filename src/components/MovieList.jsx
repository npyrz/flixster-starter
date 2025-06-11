import '../components/css/MovieList.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'

const MovieList = () => {
  const [movies, setMovie] = useState([0]);
  const [page, setPage] = useState([1]);
  const key = import.meta.env.VITE_API_KEY;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then((data) => {
    setMovie(data.results)
    },[])
});

  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} title={movie.title} rating={parseFloat  (movie.vote_average).toFixed(2)}/>
      ))};
    </div>
  )
}
export default MovieList  