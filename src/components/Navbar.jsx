import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = ({ onMovieChange, clearPage, onSort, sort, setShowFav, setShowWatch}) => {
    return (
    <header>
        <div className="headerTitle">Flixster 🎥</div>
        <div className='sortSearchClass'>
            <div className='navbarButtons'>
                <button onClick={() => setShowFav(prev => !prev)} className='button'>Favorites</button>
                <button onClick={() => setShowWatch(prev => !prev)} className='button'>Watched</button>
            </div>
            <MovieSearch onMovieChange={onMovieChange} clearPage={clearPage}/>
            <MovieSort onSort={onSort} sort={sort}/>
        </div>
    </header>
    )
}

export default Navbar