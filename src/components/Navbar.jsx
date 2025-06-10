import '../components/css/Navbar.css'
import MovieSort from './MovieSort'
import MovieSearch from './MovieSearch'

const Navbar = () => {
    return (
    <div className="Navbar">
        <h1>Flixster 🎥</h1>
        <div className='sortSearchClass'>
        <MovieSearch/>
        <MovieSort/>
        </div>
    </div>
    )
}

export default Navbar