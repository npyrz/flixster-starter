import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = ({ onMovieChange, clearPage, onSort, sort, setShowFav}) => {
    return (
    <header>
        <div className="headerTitle">Flixster 🎥</div>
        <div className='sortSearchClass'>
        <button onClick={() => setShowFav(prev => !prev)} className='showFav'>Favorites</button>
        <MovieSearch onMovieChange={onMovieChange} clearPage={clearPage}/>
        <MovieSort onSort={onSort} sort={sort}/>
        </div>
    </header>
    )
}

export default Navbar