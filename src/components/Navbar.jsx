import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = ({ onMovieChange, clearPage }) => {
    return (
    <header>
        <div className="headerTitle">Flixster 🎥</div>
        <div className='sortSearchClass'>
        <MovieSearch onMovieChange={onMovieChange} clearPage={clearPage}/>
        <MovieSort/>
        </div>
    </header>
    )
}

export default Navbar