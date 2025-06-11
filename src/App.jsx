import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadMore from './components/LoadMore'
import { useEffect, useState } from 'react'

const App = () => {
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState([1]);
  const [search, setSearch] = useState('');
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
    setMovie([...movies, ...data.results]);
    });
}, [page]);

const loadMorePages = () => {
  setPage(page => page + 1);
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