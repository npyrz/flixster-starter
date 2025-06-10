import '../components/css/MovieSearch.css'

const MovieSearch = ({onMovieChange}) => {

    const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const movieName = formData.get('movie')
    onMovieChange(movieName)
    event.target.reset();
    };

    return (
    <div className="MovieSearch">
    <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="text" name="movie" placeholder="Search for movies..."/>
        <button className="search-button" type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>
    )
}

export default MovieSearch