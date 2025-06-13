import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = ({ onMovieChange, clearPage, onSort, sort}) => {
    return (
    <header>
        <div className="headerTitle">Flixster 🎥</div>
        <div className='sortSearchClass'>
        <MovieSearch onMovieChange={onMovieChange} clearPage={clearPage}/>
        <MovieSort onSort={onSort} sort={sort}/>
        </div>
    </header>
    )
}

export default Navbar