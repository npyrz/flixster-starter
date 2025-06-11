import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = ({ onMovieChange }) => {
    return (
    <header>
        <div className="headerTitle">
        Flixster 🎥
        </div>
        <div className='sortSearchClass'>
        <MovieSearch onMovieChange={onMovieChange}/>
        <MovieSort/>
        </div>
    </header>
    )
}

export default Navbar