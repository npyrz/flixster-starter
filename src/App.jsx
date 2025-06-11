import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadMore from './components/LoadMore'
import { useEffect, useState } from 'react'

const App = () => {
  const key = import.meta.env.VITE_API_KEY;
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState([1]);
  const [query, setQuery] = useState('');
  
  // API FETCH FOR SEARCHING
  const search = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: `Bearer ${key}`
  }
};

  useEffect(() => {
    if (query != '') {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, search)
    .then(res => res.json())
    .then((data) => {
    setMovie([...query, ...data.results]);
    }
  )}
  },[query]);

const handleMovieChange = (newQuery) => {
    setQuery(newQuery);
  };


// API FETCH FOR JUST DISPLAYING NOW PLAYING MOVIES
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
    setMovie([...movies, ...data.results]);
    });
}, [page]);

const loadMorePages = () => {
  setPage(page => page + 1);
};

  return (
    <div className="App">
      <Navbar onMovieChange={handleMovieChange}/>
      <MovieList movies={movies} query={query}/>
      <LoadMore onClick={loadMorePages}/>
      <Footer/>
    </div>
  )
}
export default App