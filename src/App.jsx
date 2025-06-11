import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadMore from './components/LoadMore'
import { useEffect, useState } from 'react'

const App = () => {
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
    setMovie(prevMovies => [...prevMovies, ...data.results]);
    });
}, [page]);

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then((data) => {
    setMovie(data.results);
    });
}, []);

const loadMorePages = () => {
  setPage(prev => prev + 1);
};

  return (
    <div className="App">
      <Navbar/>
      <MovieList movies={movies}/>
      <LoadMore onClick={loadMorePages}/>
      <Footer/>
    </div>
  )
}
export default App