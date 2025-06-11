import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadMore from './components/LoadMore'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <MovieList/>
      <LoadMore/>
      <Footer/>
    </div>
  )
}
export default App