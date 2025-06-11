import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = () => {
    return (
    <header>
        <div className="headerTitle">
            Flixster 🎥
        </div>
        <div className='sortSearchClass'>
        <MovieSearch/>
        <MovieSort/>
        </div>
    </header>
    )
}

export default Navbar