import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <MovieList/>
    </div>
  )
}
export default App