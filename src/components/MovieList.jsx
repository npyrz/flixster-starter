import '../components/css/MovieList.css'
import MovieCard from './MovieCard'
import MovieModal from './MovieModal'
import { useState } from 'react'

const MovieList = ( {movies} ) => {
const [select, setSelectedMovie] = useState(null);
const [modal, setShowModal] = useState(false);

const openModal = (movie) => {
  console.log("TEST 2")
  setSelectedMovie(movie);
  setShowModal(true);
};
  const closeModal = () => {
    console.log('TEST 3 ')
    setShowModal = (false);
    setSelectedMovie = (null);
  }


  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard 
        key={movie.id} 
        img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
        title={movie.title} 
        rating={parseFloat(movie.vote_average).toFixed(2)}
        onClick={() => openModal(movie)}
        />
      ))};
      <MovieModal 
      show={modal}
      movie={select}
      onClose={closeModal}
      />
    </div>
  )
}
export default MovieList  