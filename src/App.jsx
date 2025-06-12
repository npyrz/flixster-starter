import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadMore from './components/LoadMore'


const App = () => {
  const key = import.meta.env.VITE_API_KEY;
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');


  const sortMovies = (movies) => {
    switch(sort) {
      case 'release':
        return [...movies].sort((a,b) => new Date(b.release_date) - new Date(a.release_date));
      case 'rating':
        return [...movies].sort((a,b) => b.vote_average - a.vote_average);
      case 'popular':
        return [...movies].sort((a,b) => b.popularity - a.popularity);
      case 'alpha':
        return [...movies].sort((a,b) => a.title.localeCompare(b.title))
      default: 
        return [...movies];
    }
  }

  const search = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`
    }
  };
  
  // API FETCH FOR SEARCHING
  // TODO: ISSUE WITH LOAD MORE WHEN SEARCHING  
  useEffect(() => {
    if (query != '') {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`, search)
        .then(res => res.json())
        .then((data) => {
          setMovie([...data.results]);
        }
    )}
  },[query]);

// API FETCH FOR JUST DISPLAYING NOW PLAYING MOVIES
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, search)
      .then(res => res.json())
      .then((data) => {
        setMovie([...movies, ...data.results]);
      });
  }, [page]);

  const handleMovieChange = (query) => {
    setQuery(query);
  };

  const loadMorePages = () => {
    setPage(prev => prev + 1);
};

// TODO: CURRENTLY CAN RESET BUT RESETS TO MUCH AND DELETES ALL MOVIES
  const clearPage = () => {
    console.log("CLEAR CHECKED")
    console.log(page)
    setPage(1);
    console.log(page)
    setMovie([]);
}

  return (
    <div className="App">
      <Navbar onMovieChange={handleMovieChange} clearPage={clearPage} onSort={setSort}/>
      <MovieList movies={sortMovies(movies)} query={query}/>
      <LoadMore onClick={loadMorePages}/>
      <Footer/>
    </div>
  )
}
export default App